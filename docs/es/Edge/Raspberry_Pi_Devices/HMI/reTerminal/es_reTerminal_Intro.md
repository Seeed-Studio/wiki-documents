---
description: Guía de reTerminal
title: Guía de reTerminal
keywords:
- reRouter
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal_Intro
last_update:
  date: 12/22/2023
  author: Kasun Thushara
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/New/reTerminal_new.jpg" style={{width:800, height:'auto'}}/></div>

## Comenzando con reTerminal

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Comenzando con reTerminal</font></th>
      <th class="table-trnobg"><font size={"4"}>Uso de Hardware e Interfaces</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/hw-overview-internal-v1.3.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Vamos a discutir la instalación del SO en el dispositivo reterminal, proporcionando un recorrido paso a paso, y cubriremos la instalación de controladores en esta wiki.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Esta wiki introduce varios componentes de hardware e interfaces como GPIOs, interfaz de cámara CSI, sensores integrados, pantalla LCD, etc., en el reTerminal. Te guía sobre cómo utilizar estas características para expandir tus ideas de proyecto.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reTerminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reTerminal-hardware-interfaces-usage/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal y módulos de cámara Pi</font></th>
      <th class="table-trnobg"><font size={"4"}>Placa de extensión reTerminal - reTerminal E10-1</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/cam_images.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/expansion.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> En esta wiki, discutiremos instrucciones paso a paso sobre cómo instalar Picams y configurarla. Estos pasos iniciales son cruciales para iniciar tu proyecto de detección de objetos con el dispositivo Seeed Studio reTerminal.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> La placa de expansión reTerminal E10-1 mejora el reTerminal con funciones recargables, comunicación inalámbrica mejorada, transmisión de datos industriales y capacidades de audio. Esto hace que el reTerminal sea más robusto, adecuado para aplicaciones industriales de alta velocidad, agricultura o aplicaciones domésticas inalámbricas mejoradas. Profundicemos en la wiki para obtener detalles.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reTerminalBridge/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## Instalaciones de SO

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Raspbian OS o Ubuntu</font></th>
      <th class="table-trnobg"><font size={"4"}>Buildroot</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/URPi.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/build.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Esta wiki te guiará a través del proceso de instalación de Raspberry Pi OS y Ubuntu.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Buildroot es una herramienta fácil de usar diseñada para simplificar y automatizar el proceso de construcción de un sistema Linux completo para sistemas embebidos a través de compilación cruzada. En esta wiki, profundizamos en el proceso de instalación de Buildroot.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reTerminal-Buildroot-SDK/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Yocto</font></th>
      <th class="table-trnobg"><font size={"4"}>Stream-pi y OBS studio</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/yocto-wiki-thumb.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/12.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> El Proyecto Yocto, una iniciativa de colaboración de código abierto, ayuda a los desarrolladores a crear sistemas personalizados basados en Linux para productos embebidos, independientemente de la arquitectura de hardware. En esta wiki, exploraremos el proceso de instalación de Yocto.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Stream-Pi, un software robusto de teclado macro, es una alternativa de código abierto con una interfaz de usuario personalizable. OBS Studio, una aplicación gratuita y de código abierto, soporta captura y transmisión en tiempo real. Ahora exploremos el proceso de instalación.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reTerminal-Yocto/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Streampi_OBS_On_reTerminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## Aplicaciones

### Aplicaciones de ML Embebido

<div class="table-center">
<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Primeros pasos con MediaPipe en reTerminal</th>
      <th class="table-trnobg">Primeros pasos con TensorFlow Lite en reTerminal</th>
      <th class="table-trnobg">Detección de objetos con Edge Impulse y reTerminal</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/mediapipeadd.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/ml/emotion/emotions.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/edgeimpulse.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En esta wiki, profundizamos en MediaPipe, un framework de código abierto de Google para construir pipelines de ML aplicado multimodal y multiplataforma, optimizado para inferencia en dispositivo. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki proporciona información sobre TFlite y varias aplicaciones. TensorFlow Lite, un conjunto de herramientas, facilita el aprendizaje automático en dispositivo, permitiendo a los desarrolladores ejecutar modelos en dispositivos móviles, embebidos e IoT. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En esta wiki, exploramos la detección de objetos con Edge Impulse y reTerminal. Edge Impulse permite a los desarrolladores crear y optimizar soluciones de aprendizaje automático embebido usando datos del mundo real. Profundicemos en los detalles. </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reTerminal_ML_MediaPipe/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reTerminal_ML_TFLite/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reTerminal_ML_Edgeimpulse/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

### Visión por Computadora

<div class="table-center">
<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Comenzando con reTerminal y cámara Pi con OpenCV</th>
      <th class="table-trnobg">Detección de Rostros con reTerminal y cámara Pi con OpenCV</th>
      <th class="table-trnobg">Detección de Objetos con reTerminal y cámara Pi</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/videostream.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facedetection.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/objectdetection2.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En esta guía, integraremos la cámara Raspberry Pi, capturando un flujo de video usando un fragmento de Python, e implementando una función para guardar una imagen presionando una tecla. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En esta guía, exploraremos la Detección de Rostros usando el método Haar Cascade, una técnica crucial en visión por computadora que utiliza un modelo de aprendizaje automático para identificar características faciales. Nos enfocaremos específicamente en implementar esto en el reTerminal usando la cámara Raspberry Pi. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta guía explora la utilización de la cámara Raspberry Pi y reTerminal para detectar alrededor de 90 objetos usando un modelo EfficientNet preentrenado basado en el conjunto de datos COCO. </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reTerminal_DM_opencv/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reTerminal_DM_Face_detection/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reTerminal_DM_Object_detection/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

  <div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Detección de Color con cámara reTerminal Pi y OpenCV</th>
      <th class="table-trnobg">Seguimiento de Objetos con cámara reTerminal Pi y OpenCV</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/colordetect.gif" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facetrack.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> La detección de color, un componente central de la visión por computadora, implica identificar y analizar colores en imágenes digitales o videos. En esta wiki, explicaremos cómo manejar colores y detectarlos.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Cuando la detección falla, implementa seguimiento. Explora algoritmos y comprende los beneficios del seguimiento. Seeed Studio Wiki proporciona guías completas.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reTerminal_DM_Color_detection/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más información</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reTerminal_DM_Face-tracking/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más información</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

### Home Assistant

<div class="table-center">
<table class="table-nobg">
    <tr class="table-trnobg">
    <th class="table-trnobg">Comenzando con Home Assistant en reTerminal</th>
    <th class="table-trnobg">Cómo Personalizar Home Assistant</th>
      <th class="table-trnobg">Frigate integrándose con reTerminal</th>
      </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/3.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/105.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate2.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En esta wiki, te guiaremos paso a paso para transformar tu casa ordinaria en una inteligente usando un reTerminal. Al final, tendrás un hermoso panel de control en la pantalla LCD del reTerminal, permitiéndote controlar electrodomésticos y acceder a datos de sensores sin esfuerzo. ¡Comencemos! </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki te guiará paso a paso sobre cómo construir el panel de control realizando las configuraciones necesarias y también cómo usar algunos de los complementos importantes que vienen con Home Assistant. ¡Así que comencemos!</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Frigate es un NVR de código abierto diseñado para detección de objetos con IA en tiempo real. Todo el procesamiento ocurre localmente en tu hardware, asegurando que las transmisiones de tu cámara permanezcan dentro de tu hogar. Esta wiki te guía a través de la instalación del NVR y demuestra las capacidades de detección de objetos. </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reTerminal_Home_Assistant/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reTerminal-Home-Assistant-Customize/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reterminal_frigate/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

### Crear una Interfaz de Usuario Potente

<div class="table-center">
<table class="table-nobg">
    <tr class="table-trnobg">
    <th class="table-trnobg">Qt para reTerminal con Python</th>
    <th class="table-trnobg">Flutter para reTerminal</th>
      <th class="table-trnobg">Electron para reTerminal</th>
      </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Qt-Demo.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/smart_home_demo.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/electron-reterminal-hw-demo.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki explica cómo construir tu propia interfaz de usuario usando Qt para Python en el reTerminal. Aquí hemos usado PySide2 para el desarrollo. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki te guía a través de la construcción de tu propia interfaz de usuario con Flutter, un kit de desarrollo de software de interfaz de usuario de código abierto de Google. Flutter permite el desarrollo de aplicaciones multiplataforma para Android, iOS, Linux, Mac, Windows, Google Fuchsia y la web usando una sola base de código.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta wiki te guía a través de la construcción de tu propia interfaz de usuario usando Electron, un framework de código abierto para crear aplicaciones de escritorio nativas (Windows, Mac, Linux) con tecnologías web como HTML, CSS y JavaScript. ¡Si puedes construir un sitio web, puedes construir una aplicación de escritorio! </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reTerminal-build-UI-using-Qt-for-Python/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reTerminal-build-UI-using-Flutter/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reTerminal-build-UI-using-Electron/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
        </tr>
    </table>
</div>
    <br />

  <div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
    <th class="table-trnobg">LVGL para reTerminal</th>
    <th class="table-trnobg">Construye Tu Propio Panel de Control Meteorológico Usando Grafana</th>
      </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl_reterminal.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124164221791.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>LVGL proporciona los elementos esenciales para crear una GUI embebida con elementos gráficos fáciles de usar, efectos visuales impresionantes y una huella de memoria mínima. Esta biblioteca gráfica está diseñada para microcontroladores con recursos limitados. En este artículo de la wiki, utilizaremos un ejemplo de simulador de PC con SDL2 y haremos ligeras modificaciones para mostrar la UI en pantalla completa en lugar de en una ventana. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Crédito a </font><strong><font color={'8DC215'} size={"2"}>Michaelm Klementsk.</font></strong><br /><font size={"2"}> En esta wiki, usaremos un ESP32 para recopilar lecturas de temperatura, humedad y presión, enviándolas a una base de datos de series temporales InfluxDB alojada en su servidor en la nube. Finalmente, visualizaremos y analizaremos los datos usando Grafana.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reTerminal-build-UI-using-LVGL/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/weather-dashboard-with-Grafana-reTerminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

## Varios

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Opciones de Montaje de reTerminal</font></th>
      <th class="table-trnobg"><font size={"4"}>Instalación del Cliente Mender en reTerminal</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Mount_Options/9.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/mender.png" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> En esta sección, exploramos las soluciones de montaje de reTerminal, cubriendo las especificaciones de tornillos de hardware y aspectos de diseño de la comunidad.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Esta wiki explica cómo configurar el Cliente Mender en un reTerminal para recibir actualizaciones OTA desde un Servidor Mender Alojado o Auto-Alojado. La guía enfatiza el uso de un reTerminal con un Sistema Linux personalizado compilado usando el Proyecto Yocto.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reTerminal_Mount_Options/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
  <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Mender-Client-reTerminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/banner.png" style={{width:1000, height:'auto'}}/></div>
<table>
 <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/raspberry-pi" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>🔍 Explorar Más</font></span></strong></a></div></td>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/raspberry-pi-devices/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>🔙 Volver a Dispositivos Pi </font></span></strong></a></div></td>
  </tr>
 </table>

## ✨ Proyecto de Colaboradores

- Tenemos una lista de tareas para actualizar esta página, que está categorizada bajo nuestro [proyecto de colaboradores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479), ya que estamos dedicados a mejorar la experiencia del usuario y proporcionar mejor soporte a través del desarrollo de nuestra plataforma wiki.
- [Tu contribución a esta página](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33963038) es esencial para nosotros! Realmente valoramos tu aporte y agradeceríamos mucho tu asistencia para generar ideas.

## FAQ

- [Cómo solucionar el problema de pantalla negra en reTerminal](https://wiki.seeedstudio.com/es/reterminal_black_screen)
- [Cómo flashear Raspberry Pi OS/ Ubuntu OS de 64 bits u otros OS a eMMC](https://wiki.seeedstudio.com/es/flash_different_os_to_emmc)
- [Iniciar sesión en Raspberry Pi OS/++Ubuntu OS u otros OS usando SSH sobre Wi-Fi/ Ethernet](https://wiki.seeedstudio.com/es/log_rpios_use_ssh_over_wifi_ethernet)
- [Descubre más](https://wiki.seeedstudio.com/es/reTerminal-new_FAQ/)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
