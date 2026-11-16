---
description: "Cómo usar la cámara 3D Orbbec Gemini 2 con reComputer Jetson: configuración del controlador, instalación del SDK, transmisión de profundidad y RGB para percepción en robótica."
title: Cámara 3D Orbbec Gemini2
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
image: https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/orbbec-gemini-2-3d-camera.webp
slug: /orbbec_gemini2
sku: 101090144
last_update:
  date: 2025-08-22
  author: Zibo
createdAt: '2025-08-22'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/orbbec_gemini2/
---

<div align="center">
    <img alt="Cámara 3D Orbbec Gemini 2, foto del producto" width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/orbbec-gemini-2-3d-camera.png" />
</div>

<div style={{ textAlign: "justify" }}>
La compacta cámara 3D Gemini 2 se basa en la tecnología Active Stereo IR y está equipada con el último ASIC personalizado de Orbbec para un procesamiento de profundidad de alta calidad, IMU y alimentación + conectividad mediante un solo cable USB 3.0. El amplio FOV y el amplio rango de detección de profundidad hacen que Gemini 2 sea adaptable a muchas aplicaciones, especialmente en robótica. Es fácil de configurar y operar con el Orbbec SDK y ofrece datos extremadamente precisos y fiables en diversas condiciones de iluminación, desde oscuridad total hasta entornos semi-exteriores.
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

## Características

- **Active Stereo IR** Emplea tecnología Active Stereo IR para la salida de profundidad, lo que permite una salida de datos precisa y fiable en diversas condiciones de iluminación
- **Amplio rango de detección** Proporciona datos de profundidad de calidad desde 0,15 m hasta 10 m
- **Amplio FOV** Proporciona datos con un amplio campo de visión de 91 grados en horizontal y 66 grados en vertical
- **Sincronización de múltiples cámaras** Admite sincronización de múltiples cámaras tanto para la imagen de profundidad como para la imagen RGB
- **Conexión USB** Utiliza un solo cable USB 3.0 Type-C para alimentación y conectividad

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
        <td style={{ height: "46px", width: "132px" }}>Tecnología de profundidad</td>
        <td style={{ height: "46px", width: "491px" }}>Active Stereo IR</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Temperatura de funcionamiento</td>
        <td style={{ height: "46px", width: "491px" }}>0°C ~ 40°C</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Dimensiones mecánicas</td>
        <td style={{ height: "46px", width: "491px" }}>90mm x 25mm x 30mm</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Interfaz de comunicación</td>
        <td style={{ height: "46px", width: "491px" }}>USB 3.0 Type-C</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Controlador de cámara</td>
        <td style={{ height: "46px", width: "491px" }}>UVC</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Rango de profundidad</td>
        <td style={{ height: "46px", width: "491px" }}>0,15m ~ 10m</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Rango ideal</td>
        <td style={{ height: "46px", width: "491px" }}>0,2m ~ 5m</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Resolución de profundidad</td>
        <td style={{ height: "46px", width: "491px" }}>Hasta 1280x800 @ 30fps</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>Resolución RGB</td>
        <td style={{ height: "46px", width: "491px" }}>Hasta 1920x1080 @ 30fps</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>FOV horizontal</td>
        <td style={{ height: "46px", width: "491px" }}>91°</td>
      </tr>

      <tr style={{ height: "46px" }}>
        <td style={{ height: "46px", width: "132px" }}>FOV vertical</td>
        <td style={{ height: "46px", width: "491px" }}>66°</td>
      </tr>
    </tbody>
  </table>
</div>

## Descripción general del hardware

<div align="center">
    <img alt="Vista frontal de la Gemini 2 etiquetada con las dos cámaras IR, el LDP, el LDM y la cámara RGB" width={700}
     src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-101090144-1.png" />
</div>

<div align="center">
    <img alt="Dibujo lateral de la Gemini 2 que muestra la interfaz USB Type-C" width={700}
     src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-101090144-2.png" />
</div>

<div align="center">
    <img alt="Dibujo trasero de la Gemini 2 que muestra la interfaz de sincronización de múltiples cámaras de 8 pines" width={700}
     src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-101090144-3.png" />
</div>


## Guía rápida de la Serie Gemini
- Conectar la cámara Orbbec
 ① Ensambla la rótula con el trípode y luego fija la cámara al trípode ensamblado, como se muestra en el Paso 1 a continuación.

  ② Usa el cable USB-C a USB-A para conectar el puerto Type-C de la cámara, como se muestra en el Paso 2 a continuación.

  ③ Conecta el conector USB-A al host usando el mismo cable USB-C a USB-A, como se muestra en el Paso 3 a continuación.

<div align="center">
    <img alt="Cámara Gemini montada en la rótula del trípode con el cable USB-C a USB-A conectado" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/step1.png" />
</div>

- Obtener Orbbec Viewer

Selecciona y descarga el [Orbbec Viewer](https://www.orbbec.com/developers/orbbec-sdk/) correspondiente según tu sistema y versión.

- Iniciar Orbbec Viewer

1. Después de iniciar Orbbec Viewer, asegúrate de que la herramienta reconozca la cámara 3D, como se indica en la siguiente imagen. 
【Observación】Si la cámara no es reconocida, comprueba que la cámara y el host estén correctamente conectados. Puedes intentar desconectar y volver a conectar el cable USB. Si aún no se reconoce, considera reemplazar el cable USB o verificar si la fuente de alimentación del ordenador host cumple con las especificaciones requeridas.

<div align="center">
    <img alt="Orbbec Viewer mostrando la cámara Gemini 2 conectada" width={700}
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

5. Activa el botón ‘IMU’ en la parte superior de la herramienta para iniciar y previsualizar el flujo de la IMU.

<div align="center">
    <img alt="Orbbec Viewer con el panel de metadatos de fotogramas abierto junto a los flujos de profundidad y color" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft5.png" />
</div>

6. Activa el botón en la parte superior de cada ventana para mostrar la información de metadatos.

<div align="center">
    <img alt="Metadatos de fotogramas y valores de aceleración y giroscopio de la IMU en Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft6.png" />
</div>

7. Activa el botón ‘PointCloud‘ en la parte superior de la herramienta para iniciar y previsualizar la nube de puntos 3D

<div align="center">
    <img alt="Previsualización de nube de puntos 3D en Orbbec Viewer" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft7.png" />
</div>

8. Activa el botón ‘Display’ en el menú ‘Image View’ de la izquierda para iniciar y previsualizar el flujo D2C (registro de profundidad a color). La nube de puntos 3D y el flujo D2C se mostrarán uno al lado del otro.

<div align="center">
    <img alt="Nube de puntos y flujo D2C registrado mostrados lado a lado" width={700}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/soft8.png" />
</div>



## Primeros pasos en reComputer

**Paso 1.** Descarga e instala el Orbbec SDK para arquitectura ARM64:

```bash
# Download Orbbec SDK
wget https://github.com/orbbec/OrbbecSDK_v2/releases/download/v2.4.11/OrbbecSDK_v2.4.11_202508040936_058db73_linux_aarch64.zip

# Unzip the SDK
unzip OrbbecSDK_v2.4.11_202508040936_058db73_linux_aarch64.zip
```

**Paso 2.** Compila los ejemplos y realiza pruebas:

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
    <img alt="Ejemplos del Orbbec SDK compilados y la ventana de prueba abierta en el reComputer" width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/test_sdk.png" />
</div>

## Ejemplo de aplicaciones

<div style={{ textAlign: "justify" }}>
La Orbbec Gemini2 es una cámara de profundidad compacta y de alto rendimiento, ideal para robótica, visión 3D, seguimiento de objetos y automatización industrial.
encaja perfectamente en aplicaciones de IA embebida y computación en el borde como las de las plataformas NVIDIA Jetson.
</div>

:::info
Hay algunos tutoriales de casos desarrollados por nosotros usando Gemini2:

[Medición de distancia](https://wiki.seeedstudio.com/es/yolov11_with_depth_camera/)

<div align="center">
    <img alt="Demostración de medición de distancia emparejando la Gemini 2 con YOLOv11" width={800}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/distance.png" />
</div>

[Seguimiento de objetos en dron](https://wiki.seeedstudio.com/es/object_tracking_with_reComputer_jetson_and_pX4/)

<div align="center">
    <img alt="Demostración de seguimiento de objetos en un dron usando la Gemini 2 y PX4" width={800}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/px4.png" />
</div>

:::

## Recursos

- [Guía de la API de Orbbec SDK v2](https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/source/3_Application_Guide/Application_Guide.html)
- [Hoja de datos](https://files.seeedstudio.com/products/Orbbec/Orbbec_Gemini_2_Series_Datasheet_V1.7_20240316.pdf)
- [OrbbecViewer](https://github.com/orbbec/OrbbecSDK/blob/main/doc/OrbbecViewer/English/OrbbecViewer.md)
- [ROS SDK](https://wiki.seeedstudio.com/es/orbbec_depth_camera_on_ros/)

## Preguntas frecuentes

**¿Qué tipos de flujo puedo previsualizar en Orbbec Viewer?**
Profundidad, color, IR izquierdo, IR derecho, IMU, la nube de puntos 3D y el flujo registrado D2C. Cada uno tiene su propio interruptor en la parte superior del visor, y la nube de puntos más D2C se pueden mostrar lado a lado.

**El visor no muestra la cámara. ¿Qué debo comprobar primero?**
La conexión USB. Vuelve a conectar el cable USB-C a USB-A, prueba con otro cable y confirma que el puerto del host puede suministrar suficiente energía: la Gemini 2 consume más de lo que proporciona un puerto de hub de baja potencia.

**¿Qué necesita el lado Jetson además del visor?**
El paquete Orbbec SDK v2.4.11 aarch64. Instala las reglas udev desde `shared/install_udev_rules.sh`, luego ejecuta `./build_examples.sh` y `./setup.sh` antes de que cualquier aplicación se comunique con la cámara.

**¿Es esta la misma cámara que la de la guía de la Gemini 336?**
No. Esta página cubre la Gemini 2; el trípode y las capturas de pantalla del visor se comparten con la guía rápida de la Gemini 336 porque ambas cámaras usan el mismo Orbbec Viewer. El paquete SDK y el rango de profundidad difieren según el modelo.

**¿Puedo usarla para medición de distancia o seguimiento?**
Sí: los dos ejemplos enlazados al final se ejecutan en reComputer: medición de distancia con YOLOv11 y seguimiento de objetos en un dron con PX4. Ambos leen el flujo de profundidad a través del Orbbec SDK.

## Recursos relacionados

- [Emparejar la Gemini 2 con YOLOv11 para medición de distancia](/es/yolov11_with_depth_camera/)
- [ORB-SLAM3 con Orbbec Gemini2](/es/orb_slam3_orbbec_gemini2/)
- [Implementar Depth Anything V3 en Jetson AGX Orin](/es/deploy_depth_anything_v3_jetson_agx_orin/)
- [Página de producto de Orbbec Gemini 2](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html)
- [Hoja de datos de la serie Orbbec Gemini 2](https://files.seeedstudio.com/products/Orbbec/Orbbec_Gemini_2_Series_Datasheet_V1.7_20240316.pdf)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
