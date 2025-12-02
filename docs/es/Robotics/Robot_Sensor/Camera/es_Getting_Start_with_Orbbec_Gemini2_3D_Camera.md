---
description: Mostrar a las personas cómo usar Orbbec Gemini2 en la plataforma reComputer Jetson.
title: Cámara 3D Orbbec Gemini2
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
image: https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/orbbec-gemini-2-3d-camera.webp 
slug: /es/orbbec_gemini2
last_update:
  date: 2025-08-22
  author: Zibo
---

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/orbbec-gemini-2-3d-camera.png" />
</div>

<div style={{ textAlign: "justify" }}>
La cámara 3D compacta Gemini 2 está basada en tecnología Active Stereo IR y está equipada con el último ASIC personalizado de Orbbec para procesamiento de profundidad de alta calidad, IMU, y conectividad + alimentación USB 3.0 de un solo cable. El amplio FOV y el amplio rango de detección de profundidad hace que Gemini 2 sea adaptable para muchas aplicaciones, especialmente para robótica. Es fácil de configurar y operar con el SDK de Orbbec y entrega datos extremadamente precisos y confiables en varias condiciones de iluminación desde oscuridad total hasta semi-exterior.
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
</a></div>

## Características

- **Active Stereo IR** Emplea tecnología active stereo IR para salida de profundidad, permitiendo salida de datos precisa y confiable en varias condiciones de iluminación
- **Amplio Rango de Detección** Proporciona salida de datos de profundidad de calidad desde 0.15m hasta 10m
- **Amplio FOV** Proporciona datos de campo de visión amplio a 91 grados horizontal y 66 grados vertical
- **Sincronización multi-cámara** Soporta sincronización multi-cámara tanto para imagen de profundidad como imagen RGB
- **Conexión USB** Usa un solo cable USB 3.0 Type-C para alimentación y conectividad

## Especificaciones

<div className="table-center">
  <table style={{ height: "700px" }}>
    <tbody>
      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "400px" }}>
          <strong>Parámetros</strong>
        </td>
        <td style={{ height: "46px", width: "491px" }}>
          <strong>Detalle</strong>
        </td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Voltaje</td>
        <td style={{ height: "46px", width: "491px" }}>5V (USB Type-C)</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Tecnología de Profundidad</td>
        <td style={{ height: "46px", width: "491px" }}>Active Stereo IR</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Temperatura de Operación</td>
        <td style={{ height: "46px", width: "491px" }}>0°C ~ 40°C</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Dimensión Mecánica</td>
        <td style={{ height: "46px", width: "491px" }}>90mm x 25mm x 30mm</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Interfaz de Comunicación</td>
        <td style={{ height: "46px", width: "491px" }}>USB 3.0 Type-C</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Controlador de Cámara</td>
        <td style={{ height: "46px", width: "491px" }}>UVC</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Rango de Profundidad</td>
        <td style={{ height: "46px", width: "491px" }}>0.15m ~ 10m</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Rango Ideal</td>
        <td style={{ height: "46px", width: "491px" }}>0.2m ~ 5m</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Resolución de Profundidad</td>
        <td style={{ height: "46px", width: "491px" }}>Hasta 1280x800 @ 30fps</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Resolución RGB</td>
        <td style={{ height: "46px", width: "491px" }}>Hasta 1920x1080 @ 30fps</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>FOV Horizontal</td>
        <td style={{ height: "46px", width: "491px" }}>91°</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>FOV Vertical</td>
        <td style={{ height: "46px", width: "491px" }}>66°</td>
      </tr>
    </tbody>
  </table>
</div>

## Descripción General del Hardware

<div align="center">
    <img width={700}
     src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-101090144-1.png" />
</div>

<div align="center">
    <img width={700}
     src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-101090144-2.png" />
</div>

<div align="center">
    <img width={700}
     src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-101090144-3.png" />
</div>


## Guía de Inicio Rápido de la Serie Gemini
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



## Comenzando en reComputer

**Paso 1.** Descarga e instala el SDK de Orbbec para arquitectura ARM64:

```bash
# Download Orbbec SDK
wget https://github.com/orbbec/OrbbecSDK_v2/releases/download/v2.4.11/OrbbecSDK_v2.4.11_202508040936_058db73_linux_aarch64.zip

# Unzip the SDK
unzip OrbbecSDK_v2.4.11_202508040936_058db73_linux_aarch64.zip
```

**Paso 2.** Construye ejemplos y prueba:

```bash
# Install udev rules
cd OrbbecSDK_v2.4.11_202508040936_058db73_linux_aarch64/shared/
sudo chmod +x ./install_udev_rules.sh
sudo ./install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
# Build examples and setup
cd ..
./build_examples.sh
./setup.sh
```

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/test_sdk.png" />
</div>

## Ejemplo de aplicaciones

<div style={{ textAlign: "justify" }}>
La Orbbec Gemini2 es una cámara de profundidad compacta y de alto rendimiento ideal para robótica, visión 3D, seguimiento de objetos y automatización industrial.
se adapta perfectamente en aplicaciones de IA embebida y computación en el borde como aquellas en plataformas NVIDIA Jetson.
</div>

:::info
Hay algunos tutoriales de casos desarrollados por nosotros usando Gemini2:

[Medición de Distancia](https://wiki.seeedstudio.com/es/yolov11_with_depth_camera/)

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/distance.png" />
</div>

[Seguimiento de Objetos en dron](https://wiki.seeedstudio.com/es/object_tracking_with_reComputer_jetson_and_pX4/)

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/px4.png" />
</div>

:::

## Recursos

- [Guía API del SDK v2 de Orbbec](https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/source/3_Application_Guide/Application_Guide.html)
- [Hoja de Datos](https://files.seeedstudio.com/products/Orbbec/Orbbec_Gemini_2_Series_Datasheet_V1.7_20240316.pdf)
- [OrbbecViewer](https://github.com/orbbec/OrbbecSDK/blob/main/doc/OrbbecViewer/English/OrbbecViewer.md)
- [ROS SDK](https://wiki.seeedstudio.com/es/orbbec_depth_camera_on_ros/)

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
