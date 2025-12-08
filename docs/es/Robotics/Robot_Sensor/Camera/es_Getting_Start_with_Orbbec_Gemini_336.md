---
description: Mostrar a las personas cómo usar Orbbec Gemini 336.
title: Cámara 3D Orbbec Gemini336
keywords:
- Jetson
- reComputer Robotics
- Computer Vision
- Autonomous Driving
- Industrial Robot
- Orbbec
- AI Camera
- Stereo Camera
- Depth Camera
- Visual SLAM
image: https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp
slug: /es/orbbec_gemini336
last_update:
  date: 2025-08-22
  author: Zibo
---

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp" />
</div>


La Gemini 336 es una nueva incorporación a la serie Gemini 330. Basándose en el excepcional rendimiento de profundidad de la Gemini 335, mejora la imagen infrarroja activa filtrando la luz visible. Específicamente optimizada para la calidad de imagen de profundidad en áreas reflectantes interiores, regiones oscuras de escenarios de alto rango dinámico (HDR) y condiciones de luz fuerte exterior, proporciona datos de profundidad estables y de alta calidad para los usuarios.


<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
</a></div>

## Características

- **IR Estéreo Activo** Emplea tecnología IR estéreo activa para salida de profundidad, permitiendo salida de datos precisa y confiable en varias condiciones de iluminación
- **Amplio Rango de Detección** Proporciona salida de datos de profundidad de calidad desde 0.1m hasta 20m
- **FOV Amplio** Proporciona datos de campo de visión amplio a 9 grados horizontal y 65 grados vertical
- **Sincronización Multi-cámara** Soporta sincronización multi-cámara tanto para imagen de profundidad como imagen RGB
- **Conexión USB** Utiliza un solo cable USB 3.0 Type-C para alimentación y conectividad

## Especificaciones

### Tabla de Especificaciones Gemini 336（Español）

| Categoría       | Especificación         | Detalles                                                                 |
|----------------|-----------------------|-------------------------------------------------------------------------|
| Parámetros Básicos | Entorno de Operación | Escena completa: Interior y Exterior                                            |
|                | Rango Máximo de Trabajo [1] | 0.10 - 20m+                                                             |
|                | Rango Recomendado     | 0.26 - 3m                                                               |
|                | IMU                   | Soportado                                                               |
|                | Cámara UVC            | Soportado                                                               |
|                | SDK                   | Orbbec SDK                                                              |
| Parámetros de Profundidad | Tecnología de Profundidad      | Visión Estéreo                                                           |
|                | Línea Base              | 50 mm                                                                    |
|                | Precisión Relativa Espacial [2] | ≤1.5% (1280 × 800 @ 2m & 90% × 90% ROI)                         |
|                | Campo de Visión (FoV)   | 90° × 65° @ 2m (1280 × 800)                                             |
|                | Resolución@Velocidad de Fotogramas | Hasta: 1280 × 800 @ 30fps                                               |
|                | Tipo de Obturador          | Obturador Global                                                          |
| Parámetros de Color | Campo de Visión (FoV)   | 86° × 55°                                                                |
|                | Resolución@Velocidad de Fotogramas | Hasta: 1920 × 1080 @ 30fps                                              |
|                | Formato de Imagen          | YUYV & MJPEG                                                            |
|                | Tipo de Obturador          | Obturador Rodante                                                         |
| Parámetros Eléctricos | Recomendación de Fuente de Alimentación | DC 5V & ≥1.5A                                                     |
|                | Consumo Promedio de Energía | ＜3 W                                                                 |
|                | Cubierta de Filtro          | Sí, Paso IR                                                           |
| Parámetros Físicos | Temperatura de Operación | -10 - 45℃                                                             |
|                | Clasificación IP             | IP5X                                                                    |
|                | Dimensiones            | 90 mm × 25 mm × 30.7 mm                                                 |
|                | Peso                | 99g                                                                     |
|                | Puerto de Datos y Alimentación     | USB 3.0 & USB 2.0 Type-C                                                |
|                | Puerto de Sincronización Multi-dispositivo | Interfaz de 8 pines                                                       |
|                | Método de Montaje       | Montaje Inferior: 1 × 1/4 - 20unc Orificio Roscado Montaje Trasero: 2 × Orificios Roscados M3 |


## Descripción General del Hardware
<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overvew.png" />
</div>

<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview1.png" />
</div>

<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview2.png" />
</div>

<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview3.png" />
</div>
<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview4.png" />
</div>
<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview5.png" />
</div>
<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overview6.png" />
</div>
<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overvew7.png" />
</div>

<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/overvew9.png" />
</div>

## Guía de Inicio Rápido de la Serie Gemini 330
- Conectar la Cámara Orbbec
 ① Ensambla la cabeza del trípode con el trípode, y luego asegura la cámara en el trípode ensamblado, como se ilustra en el Paso 1 a continuación.

  ② Usa el cable USB-C a USB-A para conectar el puerto Type-C de la cámara, como se muestra en el Paso 2 a continuación.

  ③ Conecta el conector USB-A al host usando el mismo cable USB-C a USB-A, como se muestra en el Paso 3 a continuación.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/step1.png" />
</div>

- Obtener Orbbec Viewer

Selecciona y descarga el [Orbbec Viewer](https://www.orbbec.com/developers/orbbec-sdk/) correspondiente basado en tu sistema y versión.

- Lanzar Orbbec Viewer

1. Después de iniciar el Orbbec Viewer, por favor asegúrate de que la herramienta reconozca la cámara 3D, como se indica en la siguiente imagen. 
【Observación】Si la cámara no es reconocida, por favor verifica para asegurar que la cámara y el host estén conectados correctamente. Puedes intentar desconectar y luego reconectar el cable USB. Si aún no es reconocida, considera reemplazar el cable USB o verificar si la fuente de alimentación de la computadora host cumple con las especificaciones requeridas.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft1.png" />
</div>


2. Activa el botón 'Depth' en la parte superior de la herramienta para iniciar y previsualizar el flujo de profundidad.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft2.png" />
</div>

3. Activa el botón 'Color' en la parte superior de la herramienta para iniciar y previsualizar el flujo de color. El flujo de color y el flujo de profundidad se mostrarán lado a lado.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft3.png" />
</div>

4. Activa los botones 'IR Left' e 'IR Right' en la parte superior de la herramienta para iniciar y previsualizar el flujo IR.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft4.png" />
</div>

5. Activa el botón 'IMU' en la parte superior de la herramienta para iniciar y previsualizar el flujo IMU.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft5.png" />
</div>

6. Activa el botón en la parte superior de cada ventana para mostrar la información de metadatos.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft6.png" />
</div>

7. Activa el botón 'PointCloud' en la parte superior de la herramienta para iniciar y previsualizar la nube de puntos 3D

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft7.png" />
</div>

8. Activa el botón 'Display' bajo el menú 'Image View' en la izquierda para iniciar y previsualizar el flujo D2C (registro de profundidad a color). La nube de puntos 3D y el flujo D2C se mostrarán lado a lado.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft8.png" />
</div>


## Recursos

- [Guía Oficial de Orbbec](https://doc.orbbec.com/documentation/Orbbec%20Gemini%20330%20Series%20Documentation/About%20Orbbec%20Gemini%20330%20Series)
- [Hoja de Datos](https://doc.orbbec.com/documentation/Orbbec%20Gemini%20330%20Series%20Documentation/Gemini%20330%20Series%20Datasheet%20(Overall))
- [OrbbecViewer](https://github.com/orbbec/OrbbecSDK/blob/main/doc/OrbbecViewer/English/OrbbecViewer.md)
- [ROS SDK](https://wiki.seeedstudio.com/es/orbbec_depth_camera_on_ros/)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
