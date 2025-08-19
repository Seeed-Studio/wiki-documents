---
description: Guía de reTerminal
title: Guía de reTerminal
keywords:
- reRouter
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal_Intro
last_update:
  date: 04/03/2025
  author: Erick González
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/New/reTerminal_new.jpg" style={{width:800, height:'auto'}}/></div>

## Primeros pasos con reTerminal

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Primeros pasos con reTerminal</font></th>
      <th class="table-trnobg"><font size={"4"}>Uso de Hardware e Interfaces</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/hw-overview-internal-v1.3.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> En esta sección, discutimos la instalación de sistemas operativos en el dispositivo reTerminal, ofreciendo una guía paso a paso y cubriendo la instalación de drivers en este wiki.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este wiki introduce diversos componentes de hardware e interfaces como GPIO, interfaz de cámara CSI, sensores integrados, pantalla LCD, etc., en el reTerminal. Te guiará en cómo usar estas características para ampliar tus ideas de proyecto.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más Información</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-hardware-interfaces-usage/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más Información</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal y módulos de cámara Pi</font></th>
      <th class="table-trnobg"><font size={"4"}>Tarjeta de expansión reTerminal - reTerminal E10-1</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/cam_images.jpg" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/expansion.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> En este wiki, discutiremos las instrucciones paso a paso para instalar módulos PiCam y configurarlos. Estos pasos iniciales son clave para comenzar tu proyecto de detección de objetos con el dispositivo Seeed Studio reTerminal.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> La placa de expansión reTerminal E10-1 mejora el reTerminal con funciones recargables, mejor comunicación inalámbrica, transmisión de datos de nivel industrial y capacidades de audio. Esto hace que el reTerminal sea más robusto, adecuado para aplicaciones industriales de alta velocidad, agricultura o mejoras inalámbricas en el hogar. Sumérgete en el wiki para más detalles.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más Información</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminalBridge/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más Información</font></span></strong></a></div></td>
		</tr>
	</table>
</div>


## Instalaciones de sistemas operativos

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
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este wiki te guiará en el proceso de instalación de Raspberry Pi OS y Ubuntu.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Buildroot es una herramienta diseñada para simplificar y automatizar la creación de un sistema Linux completo para sistemas embebidos mediante cross-compilación. En este wiki profundizamos en su proceso de instalación.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más Información</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-Buildroot-SDK/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más Información</font></span></strong></a></div></td>
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
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> El Proyecto Yocto, una iniciativa de código abierto, ayuda a desarrolladores a crear sistemas basados en Linux personalizados para productos embebidos, sin importar la arquitectura de hardware. En este wiki, exploraremos su proceso de instalación.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Stream-Pi, un robusto software de macro-teclado de código abierto y altamente personalizable. OBS Studio, gratuito y de código abierto, ofrece captura en tiempo real y streaming. Aquí abordamos su instalación.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-Yocto/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más Información</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Streampi_OBS_On_reTerminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más Información</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

## Aplicaciones

### Aplicaciones de ML embebido

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
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En este wiki, profundizamos en MediaPipe, un framework de código abierto de Google para construir pipelines de ML multiplataforma y multimodal, optimizados para inferencia en el dispositivo.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este wiki ofrece conocimientos sobre TFlite y varias aplicaciones. TensorFlow Lite es un conjunto de herramientas que facilita el machine learning en el dispositivo, permitiendo a los desarrolladores ejecutar modelos en móviles, embebidos y dispositivos IoT.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En este wiki, exploramos la detección de objetos con Edge Impulse y reTerminal. Edge Impulse permite a los desarrolladores crear y optimizar soluciones de machine learning embebido usando datos reales. Entremos en detalles.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_ML_MediaPipe/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más Información</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_ML_TFLite/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más Información</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_ML_Edgeimpulse/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más Información</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### Visión por computador

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Primeros pasos con reTerminal y Pi camera con OpenCV</th>
      <th class="table-trnobg">Detección de Rostros con reTerminal y Pi camera con OpenCV</th>
      <th class="table-trnobg">Detección de Objetos con reTerminal y Pi camera</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/videostream.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facedetection.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/objectdetection2.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En esta guía, integraremos la cámara Raspberry Pi, capturando un flujo de video con un script Python e implementando una función para guardar una imagen al presionar una tecla.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Aquí exploraremos la Detección de Rostros con el método Haar Cascade, técnica crucial en visión por computador que utiliza un modelo de machine learning para identificar rasgos faciales. Nos centraremos en implementarlo en reTerminal con la cámara Pi.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta guía muestra cómo usar la cámara Pi y reTerminal para detectar ~90 objetos con un modelo EfficientNet pre-entrenado en COCO dataset.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_DM_opencv/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más Información</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_DM_Face_detection/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más Información</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_DM_Object_detection/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más Información</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>
    
  <div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Detección de Color con reTerminal, Pi camera y OpenCV</th>
      <th class="table-trnobg">Seguimiento de Objetos con reTerminal, Pi camera y OpenCV</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/colordetect.gif" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facetrack.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> La detección de color, un componente esencial en visión por computador, identifica y analiza colores en imágenes o videos. En este wiki explicamos cómo manejar colores y detectarlos.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Cuando la detección falla, implementamos el seguimiento. Exploramos algoritmos y los beneficios del tracking. Seeed Studio Wiki ofrece guías completas.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_DM_Color_detection/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más Información</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_DM_Face-tracking/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más Información</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

### Home Assistant 

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
    <th class="table-trnobg">Primeros pasos con Home Assistant en reTerminal</th>
    <th class="table-trnobg">Cómo personalizar Home Assistant</th>
      <th class="table-trnobg">Frigate integrado con reTerminal</th>
      </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/3.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/105.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate2.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En este wiki, te guiaremos paso a paso para convertir tu casa en un hogar inteligente usando reTerminal. Al final, tendrás un hermoso dashboard en la pantalla LCD del reTerminal, permitiéndote controlar electrodomésticos y acceder a datos de sensores fácilmente. ¡Empecemos!</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este wiki te lleva paso a paso para construir el dashboard realizando las configuraciones necesarias y usando algunos complementos importantes de Home Assistant. ¡Manos a la obra!</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Frigate es un NVR de código abierto diseñado para detección de objetos en tiempo real usando IA. Todo el procesamiento ocurre localmente, manteniendo las transmisiones de cámara en casa. Este wiki detalla la instalación de NVR y muestra la capacidad de detección de objetos.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_Home_Assistant/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más Información</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-Home-Assistant-Customize/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más Información</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reterminal_frigate/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más Información</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### Crear una potente interfaz de usuario

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
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este wiki explica cómo construir tu propia interfaz de usuario usando Qt para Python en reTerminal. Aquí hemos utilizado PySide2 para el desarrollo.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta guía te muestra cómo crear una interfaz de usuario con Flutter, un SDK de código abierto de Google para desarrollar apps multiplataforma (Android, iOS, Linux, Mac, Windows, Google Fuchsia, web) usando un solo codebase.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta guía describe cómo crear tu propia interfaz usando Electron, un framework de código abierto para crear apps de escritorio (Windows, Mac, Linux) con HTML, CSS y JavaScript. Si puedes crear un sitio web, ¡puedes crear una app de escritorio!</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-build-UI-using-Qt-for-Python/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más Información</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-build-UI-using-Flutter/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más Información</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-build-UI-using-Electron/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más Información</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>
    <br />

  <div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
    <th class="table-trnobg">LVGL para reTerminal</th>
    <th class="table-trnobg">Crea tu propio panel de clima con Grafana</th>
      </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl_reterminal.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124164221791.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>LVGL ofrece lo necesario para crear una GUI embebida con elementos gráficos fáciles de usar, efectos visuales atractivos y baja huella de memoria. Es una librería gráfica orientada a microcontroladores con recursos limitados. En este artículo, usaremos un ejemplo de simulador de PC con SDL2 y pequeños ajustes para mostrar la UI a pantalla completa.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Crédito a </font><strong><font color={'8DC215'} size={"2"}>Michaelm Klementsk.</font></strong><br /><font size={"2"}> En este wiki, usaremos un ESP32 para recolectar lecturas de temperatura, humedad y presión, enviándolas a una base de datos de series temporales InfluxDB alojada en la nube. Finalmente, usaremos Grafana para visualizar y analizar los datos.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-build-UI-using-LVGL/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más Información</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/weather-dashboard-with-Grafana-reTerminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más Información</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## Varios

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Opciones de Montaje reTerminal</font></th>
      <th class="table-trnobg"><font size={"4"}>Instalación del Cliente Mender en reTerminal</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Mount_Options/9.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/mender.png" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> En esta sección, exploramos las soluciones de montaje para reTerminal, cubriendo especificaciones de tornillos de hardware y diseños de la comunidad.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este wiki explica cómo configurar el Cliente Mender en un reTerminal para recibir actualizaciones OTA desde un servidor Mender alojado (Hosted) o self-hosted. La guía se centra en usar un reTerminal con Linux personalizado compilado con Yocto.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal_Mount_Options/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más Información</font></span></strong></a></div></td>
		<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Mender-Client-reTerminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más Información</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/banner.png" style={{width:1000, height:'auto'}}/></div> 
<table>
	<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/raspberry-pi" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>🔍 Explorar más</font></span></strong></a></div></td>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/raspberry-pi-devices/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>🔙 Volver a Dispositivos Pi</font></span></strong></a></div></td>
		</tr>
	</table>

## ✨ Proyecto de Contribuidor

- Tenemos una lista de tareas para actualizar esta página, categorizadas en nuestro [proyecto de contribuidor](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479). Estamos comprometidos con mejorar la experiencia de usuario y dar mejor soporte a través del desarrollo de nuestra plataforma wiki.
- [Tu contribución a esta página](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33963038) es esencial para nosotros. Valoramos muchísimo tu aporte y te agradeceríamos enormemente tus ideas.

## FAQ

- [Cómo solucionar pantalla negra en reTerminal](https://wiki.seeedstudio.com/reterminal_black_screen)
- [Cómo flashear Raspberry Pi OS/ 64-bit Ubuntu OS u otro OS a eMMC](https://wiki.seeedstudio.com/flash_different_os_to_emmc)
- [Iniciar sesión en Raspberry Pi OS/ Ubuntu OS u otro OS usando SSH por Wi-Fi/Ethernet](https://wiki.seeedstudio.com/log_rpios_use_ssh_over_wifi_ethernet)
- [Ver más](https://wiki.seeedstudio.com/reTerminal-new_FAQ/)


## Soporte técnico y debate de productos

¡Gracias por elegir nuestros productos! Queremos ofrecer diferentes opciones de soporte para asegurarnos de que tu experiencia sea fluida. Ofrecemos varios canales de comunicación para diferentes preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
