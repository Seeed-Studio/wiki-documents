---
description: "Cómo empezar con la cámara 3D Orbbec Gemini 336: configuración, instalación del SDK, transmisión de profundidad y color para aplicaciones de visión robótica."
title: Cámara 3D Orbbec Gemini336
keywords:
  - Jetson
  - reComputer Robotics
  - Visión por Computador
  - Conducción Autónoma
  - Robot Industrial
  - Orbbec
  - Cámara de IA
  - Cámara Estéreo
  - Cámara de Profundidad
  - SLAM Visual
image: https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp
slug: /orbbec_gemini336
last_update:
  date: 2025-08-22
  author: Zibo
createdAt: '2025-12-01'
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/es/orbbec_gemini336/
---

<div align="center">
    <img alt="Cámara 3D Orbbec Gemini 336, foto del producto" width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp" />
</div>


La Gemini 336 es una incorporación completamente nueva a la serie Gemini 330. Basándose en el rendimiento de profundidad excepcional de la Gemini 335, mejora la imagen infrarroja activa filtrando la luz visible. Especialmente optimizada para la calidad de imagen de profundidad en áreas reflectantes interiores, regiones oscuras de escenarios de alto rango dinámico (HDR) y condiciones de luz intensa en exteriores, ofrece a los usuarios datos de profundidad estables y de alta calidad.


<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-336-3D-Camera-3D-p-6662.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

## Características

- **IR estéreo activo** Emplea tecnología IR estéreo activa para la salida de profundidad, lo que permite una salida de datos precisa y fiable en diversas condiciones de iluminación
- **Amplio rango de detección** Proporciona salida de datos de profundidad de calidad desde 0,1 m hasta 20 m
- **Amplio FOV** Proporciona datos de campo de visión amplio con 90 grados horizontales y 65 grados verticales
- **Sincronización de múltiples cámaras** Admite la sincronización de múltiples cámaras tanto para la imagen de profundidad como para la imagen RGB
- **Conexión USB** Utiliza un único cable USB 3.0 Type-C para alimentación y conectividad

## Especificaciones

### Tabla de especificaciones de la Gemini 336（Inglés）

| Categoría       | Especificación         | Detalles                                                                 |
|----------------|-----------------------|-------------------------------------------------------------------------|
| Parámetros básicos | Entorno de funcionamiento | Escena completa: Interior y Exterior                                    |
|                | Rango máximo de trabajo [1] | 0,10 - 20 m+                                                          |
|                | Rango recomendado      | 0,26 - 3 m                                                              |
|                | IMU                   | Compatible                                                              |
|                | Cámara UVC            | Compatible                                                              |
|                | SDK                   | Orbbec SDK                                                              |
| Parámetros de profundidad | Tecnología de profundidad | Visión estéreo                                                        |
|                | Línea base            | 50 mm                                                                    |
|                | Precisión relativa espacial [2] | ≤1,5% (1280 × 800 @ 2 m y 90% × 90% ROI)                        |
|                | Campo de visión (FoV) | 90° × 65° @ 2 m (1280 × 800)                                            |
|                | Resolución@Frecuencia de imagen | Hasta: 1280 × 800 @ 30 fps                                      |
|                | Tipo de obturador     | Obturador global                                                        |
| Parámetros de color | Campo de visión (FoV) | 86° × 55°                                                                |
|                | Resolución@Frecuencia de imagen | Hasta: 1920 × 1080 @ 30 fps                                     |
|                | Formato de imagen     | YUYV y MJPEG                                                            |
|                | Tipo de obturador     | Obturador rodante                                                       |
| Parámetros eléctricos | Recomendación de alimentación | CC 5 V y ≥1,5 A                                                   |
|                | Consumo medio de energía | ＜3 W                                                                 |
|                | Cubierta de filtro    | Sí, paso IR                                                             |
| Parámetros físicos | Temperatura de funcionamiento | -10 - 45 ℃                                                           |
|                | Grado de protección IP | IP5X                                                                    |
|                | Dimensiones           | 90 mm × 25 mm × 30,7 mm                                                 |
|                | Peso                  | 99 g                                                                    |
|                | Puerto de datos y alimentación | USB 3.0 y USB 2.0 Type-C                                           |
|                | Puerto de sincronización multiequipo | Interfaz de 8 pines                                              |
|                | Método de montaje     | Montaje inferior: 1 × orificio roscado 1/4 - 20unc Montaje trasero: 2 × orificios roscados M3 |


## Descripción general del hardware
<div align="center">
    <img alt="Vista frontal de la Gemini 336 etiquetada con los dos módulos IR, LRM, LDM, módulo RGB y filtro de paso IR" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overvew.png" />
</div>

<div align="center">
    <img alt="Vista frontal de la Gemini 336 que muestra las dos lentes IR y el módulo RGB" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview1.png" />
</div>

<div align="center">
    <img alt="Vista trasera de la Gemini 336 con las aletas del disipador de calor" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview2.png" />
</div>

<div align="center">
    <img alt="Dibujo de la vista frontal de la Gemini 336 con las tolerancias de separación y diámetro de las lentes" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview3.png" />
</div>
<div align="center">
    <img alt="Dibujo de la vista trasera con el espaciado de orificios de 45 mm y los puntos de montaje M3, profundidad máxima de inserción 3 mm" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview4.png" />
</div>
<div align="center">
    <img alt="Dibujo lateral con los ángulos de campo de visión OP 104 grados / ME 107 grados y OP 109,6 grados" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview5.png" />
</div>
<div align="center">
    <img alt="Dibujo lateral con los ángulos OP 94 grados / ME 101 grados y el punto de montaje 1/4-20UNC, profundidad máxima de inserción 5 mm" width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview6.png" />
</div>
<div align="center">
    <img alt="Dibujo lateral con el punto de montaje USB Type-C y los dos puntos de montaje M2, altura 15,00 más o menos 0,15 mm" width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overvew7.png" />
</div>

<div align="center">
    <img alt="Dibujo lateral con el ancho 30,70 más o menos 0,30 mm y la altura 25,00 más o menos 0,30 mm" width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overvew9.png" />
</div>

## Guía de inicio rápido de la Serie Gemini 330
- Conectar la cámara Orbbec
 ① Ensambla la rótula con el trípode y luego fija la cámara al trípode ensamblado, como se muestra en el Paso 1 a continuación.

  ② Utiliza el cable USB-C a USB-A para conectar el puerto Type-C de la cámara, como se muestra en el Paso 2 a continuación.

  ③ Conecta el conector USB-A al host utilizando el mismo cable USB-C a USB-A, como se muestra en el Paso 3 a continuación.

<div align="center">
    <img alt="Cámara Gemini montada en la rótula del trípode con el cable USB-C a USB-A conectado" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/step1.png" />
</div>

- Obtener Orbbec Viewer

Selecciona y descarga el [Orbbec Viewer](https://www.orbbec.com/developers/orbbec-sdk/) correspondiente según tu sistema y versión.

- Iniciar Orbbec Viewer

1. Después de iniciar Orbbec Viewer, asegúrate de que la herramienta reconozca la cámara 3D, como se indica en la siguiente imagen. 
【Observación】Si la cámara no es reconocida, comprueba que la cámara y el host estén correctamente conectados. Puedes intentar desconectar y volver a conectar el cable USB. Si aún no se reconoce, considera sustituir el cable USB o verificar si la fuente de alimentación del ordenador host cumple las especificaciones requeridas.

<div align="center">
    <img alt="Orbbec Viewer antes de que se conecte una cámara, mostrando la vista previa vacía y el mensaje &quot;No device found&quot;" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft1.png" />
</div>


2. Activa el botón ‘Depth’ en la parte superior de la herramienta para iniciar y previsualizar el flujo de profundidad.

<div align="center">
    <img alt="Flujo de profundidad activado en Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft2.png" />
</div>

3. Activa el botón ‘Color‘ en la parte superior de la herramienta para iniciar y previsualizar el flujo de color. El flujo de color y el flujo de profundidad se mostrarán uno al lado del otro.

<div align="center">
    <img alt="Flujos de color y profundidad mostrados lado a lado en Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft3.png" />
</div>

4. Activa los botones ‘IR Left’ e ‘IR Right’ en la parte superior de la herramienta para iniciar y previsualizar el flujo IR.

<div align="center">
    <img alt="Flujos IR izquierdo y derecho previsualizados en Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft4.png" />
</div>

5. Activa el botón ‘IMU’ en la parte superior de la herramienta para iniciar y previsualizar el flujo IMU.

<div align="center">
    <img alt="Flujo IMU previsualizado en Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft5.png" />
</div>

6. Activa el botón en la parte superior de cada ventana para mostrar la información de metadatos.

<div align="center">
    <img alt="Superposición de metadatos habilitada en las ventanas de Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft6.png" />
</div>

7. Activa el botón ‘PointCloud‘ en la parte superior de la herramienta para iniciar y previsualizar la nube de puntos 3D

<div align="center">
    <img alt="Vista previa de nube de puntos 3D en Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft7.png" />
</div>

8. Activa el botón ‘Display’ en el menú ‘Image View’ de la izquierda para iniciar y previsualizar el flujo D2C (registro de profundidad a color). La nube de puntos 3D y el flujo D2C se mostrarán uno al lado del otro.

<div align="center">
    <img alt="Nube de puntos y flujo D2C registrado mostrados uno al lado del otro" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft8.png" />
</div>


## Recursos

- [Guía oficial de Orbbec](https://doc.orbbec.com/documentation/Orbbec%20Gemini%20330%20Series%20Documentation/About%20Orbbec%20Gemini%20330%20Series)
- [Hoja de datos](https://doc.orbbec.com/documentation/Orbbec%20Gemini%20330%20Series%20Documentation/Gemini%20330%20Series%20Datasheet%20(Overall))
- [OrbbecViewer](https://github.com/orbbec/OrbbecSDK/blob/main/doc/OrbbecViewer/English/OrbbecViewer.md)
- [ROS SDK](https://wiki.seeedstudio.com/es/orbbec_depth_camera_on_ros/)

## Recursos relacionados

- [Cámara 3D Orbbec Gemini 2](/es/orbbec_gemini2/)
- [ORB-SLAM3 con Orbbec Gemini2](/es/orb_slam3_orbbec_gemini2/)
- [PyCuVSLAM en reComputer](/es/pycuvslam_recomputer_robotics/)
- [Cámara de profundidad Orbbec en ROS](/es/orbbec_depth_camera_on_ros/)

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
