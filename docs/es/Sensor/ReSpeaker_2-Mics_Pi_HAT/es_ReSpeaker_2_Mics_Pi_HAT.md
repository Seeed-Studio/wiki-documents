---
description: Descripción general
title: Descripción general
keywords:
- ReSpeaker_2-Mics_Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ReSpeaker_2_Mics_Pi_HAT
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/products/107100001/01.png)

ReSpeaker 2-Mics Pi HAT es una placa de expansión de doble micrófono para Raspberry Pi diseñada para aplicaciones de IA y voz. Esto significa que puedes construir un producto de voz más potente y flexible que integre Amazon Alexa Voice Service, Google Assistant, y más.

La placa está desarrollada basándose en WM8960, un códec estéreo de bajo consumo. Hay 2 micrófonos en ambos lados de la placa para capturar sonidos y también proporciona 3 LEDs RGB APA102, 1 Botón de Usuario y 2 interfaces Grove integradas para expandir tus aplicaciones. Además, tanto el Jack de Audio de 3.5mm como la Salida de Altavoz JST 2.0 están disponibles para la salida de audio.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong></a>
</div>

## Características

* Compatible con Raspberry Pi (Soporta Raspberry Pi Zero y Zero W, Raspberry Pi B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 B+, Raspberry Pi 3 A+ y Raspberry Pi 4)
* 2 Micrófonos
* 2 Interfaces Grove
* 1 Botón de Usuario
* Jack de Audio de 3.5mm
* Salida de Altavoz JST2.0
* Frecuencia de Muestreo Máxima: 48Khz

## Ideas de Aplicación

* Aplicación de Interacción por Voz
* Asistente de IA

## Descripción General del Hardware

![](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/mic_hatv1.0.png)

* BUTTON: un Botón de Usuario, conectado a GPIO17
* MIC_L y MIC_R: 2 Micrófonos en ambos lados de la placa
* RGB LED: 3 LEDs RGB APA102, conectados a la interfaz SPI
* WM8960: un códec estéreo de bajo consumo
* Conectores de 40 Pines de Raspberry Pi: soporta Raspberry Pi Zero, Raspberry Pi 1 B+, Raspberry Pi 2 B, Raspberry Pi 3 B y Raspberry Pi 3 B+
* POWER: Puerto Micro USB para alimentar el ReSpeaker 2-Mics Pi HAT, por favor alimenta la placa para proporcionar suficiente corriente cuando uses el altavoz.
* I2C: Puerto Grove I2C, conectado a I2C-1
* GPIO12: Puerto digital Grove, conectado a GPIO12 y GPIO13
* JST 2.0 SPEAKER OUT: para conectar altavoz con conector JST 2.0
* 3.5mm AUDIO JACK: para conectar auriculares o altavoz con Conector de Audio de 3.5mm

## Plataformas Soportadas

<div align="center"><img src="https://files.seeedstudio.com/products/107100001/01.png"/></div>

* **[Comenzar con Raspberry Pi](https://wiki.seeedstudio.com/es/ReSpeaker_2_Mics_Pi_HAT_Raspberry)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/JetsonNano-2MICS.png"/></div>

* **[Comenzar con Nvidia Jetson Nano Serie](https://wiki.seeedstudio.com/es/ReSpeaker_2_Mics_Pi_HAT_Jetson)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/IMX6-2MIC-removebg-preview.png"/></div>

* **[Comenzar con NPi i.MX6ULL Dev Board Linux SBC](https://wiki.seeedstudio.com/es/NPi-i.MX6ULL-Dev-Board-Linux-SBC/#iis)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/STM32-2MIC-removebg-preview.png"/></div>

* **[Comenzar con ODYSSEY – STM32MP157C](https://wiki.seeedstudio.com/es/ODYSSEY-STM32MP157C/#i2s-on-odyssey-stm32mp157c)**

## Habilitando el Reconocimiento de Voz en el Edge con Picovoice

<div align="center"><img width = "{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/banner.gif"/></div>

[**Picovoice**](https://picovoice.ai/) **permite a las empresas innovar y diferenciarse rápidamente con IA de voz privada**. Construye una estrategia de IA unificada alrededor de tu marca y productos con nuestras tecnologías de reconocimiento de voz y [**comprensión de lenguaje natural (NLU)**](https://searchenterpriseai.techtarget.com/definition/natural-language-understanding-NLU).

**Seeed se ha asociado con Picovoice para traer una solución de Reconocimiento de Voz en el edge usando [ReSpeaker 2-Mic Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html) para desarrolladores.**

Picovoice es una plataforma de extremo a extremo para construir productos de voz en tus términos. Permite crear experiencias de voz similares a Alexa y Google. Pero funciona completamente 100% en el dispositivo. Hay ventajas de Picovoice:

* **Privado**: Todo se procesa sin conexión. Intrínsecamente compatible con HIPAA y GDPR.
* **Confiable**: Funciona sin necesidad de conectividad constante.
* **Latencia Cero**: La arquitectura edge-first elimina el retraso impredecible de la red.
* **Preciso**: Resistente al ruido y la reverberación. Supera a las alternativas basadas en la nube por amplios márgenes.
* **Multiplataforma**: Diseña una vez, despliega en cualquier lugar. Construye usando lenguajes y frameworks familiares.

## Detección de palabras clave de código abierto con Mycroft Precise

Además de Picovoice, proporcionamos soporte limitado para Mycroft Precise - un paquete de detección de palabras clave en tiempo real de código abierto. Mycroft Precise es completamente de código abierto y puede ser entrenado para reconocer cualquier cosa desde un nombre hasta una tos. Precise está diseñado para funcionar en Linux. Se sabe que funciona en una variedad de distribuciones de Linux incluyendo Debian, Ubuntu y Raspbian. Según el archivo README oficial, "probablemente opera en otras distribuciones *nx."

Mycroft Precise es un proyecto con Licencia Apache-2.0, lo que significa que puedes modificarlo y distribuirlo, incluyendo para propósitos comerciales - el único requisito es que preserves la licencia original.

**Puedes encontrar ejemplos tanto para productos Picovoice como para Mycroft Precise en la documentación de Introducción para la plataforma correspondiente.**

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/ReSpeaker 2-Mics Pi HAT.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* **[Eagle]** [Respeaker_2_Mics_Pi_HAT_SCH](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_SCH.zip)
* **[Eagle]** [Respeaker_2_Mics_Pi_HAT_PCB](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_PCB.zip)
* **[PDF]** [Respeaker_2_Mics_Pi_HAT_SCH](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_SCH.pdf)
* **[PDF]** [Respeaker_2_Mics_Pi_HAT_PCB](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_PCB.pdf)
* **[3D]** [ReSpeaker 2 Mics Pi HAT 3D](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT.zip)
* **[Driver]** [Seeed-Voice Driver](https://github.com/respeaker/seeed-voicecard)
* **[Algorithms]** [Algorithms includes DOA, VAD, NS](https://github.com/respeaker/mic_array)
* **[Voice Engine]** [Voice Engine project, provides building blocks to create voice enabled objects](https://github.com/voice-engine/voice-engine)
* **[Algorithms]** [AEC](https://github.com/voice-engine/ec)

* **[Eagle]** [Respeaker_2_Mics_Pi_HAT_SCH_v2](https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/202004059_ReSpeaker-2-Mics-Pi-HAT-V2.0_SCH_PDF_241121.pdf)


## Proyectos

**Construye Tu Propio Amazon Echo Usando una RPI y ReSpeaker HAT**: Cómo construir tu propio Amazon Echo usando una Raspberry Pi y ReSpeaker 2-Mics HAT.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/idreams/build-your-own-amazon-echo-using-a-rpi-and-respeaker-hat-7f44a0/embed' width='350'></iframe>

**Tu barista personal del hogar cobra vida con esta máquina de café habilitada por voz**: Una máquina de café de código abierto, privada por diseño que mantiene tu café favorito y horario de cafeína privados.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/4gN1bvl24ZM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Soporte Técnico y Discusión del Producto



¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
