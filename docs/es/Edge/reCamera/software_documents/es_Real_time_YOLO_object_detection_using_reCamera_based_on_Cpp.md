---
description: Este wiki demuestra cómo usar YOLO para detectar objetos en tiempo real en reCamera con C++.
title: Detección de objetos YOLO en tiempo real usando reCamera basado en Cpp
keywords:
  - Http
  - reCamera
  - Object detecton
  - YOLO
  - C++
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /es/real_time_yolo_object_detection_using_recamera_based_on_cpp
last_update:
  date: 06/26/2025
  author: Liangyuxin

no_comments: false # for Disqus
---

# Detección de objetos YOLO en tiempo real usando reCamera basado en Cpp

Este documento demuestra cómo implementar captura de fotos en tiempo real, detección de objetos YOLO y acceso a resultados por HTTP con C++ basado en compilación cruzada en terminales reCamera. Este enfoque evita los problemas de sobrecalentamiento encontrados al usar Node-RED en reCamera. Puedes consultar este documento para modificar el código C++ para aplicaciones de visión por computadora personalizadas.

## Preparación del Entorno

### Pre-compilación

Primero, necesitas consultar el documento "Develop with C/C++" para configurar el entorno de compilación cruzada en tu linux.
**Nota**: Reconfigura la ruta después de cada arranque:

```
export SG200X_SDK_PATH=$HOME/recamera/sg2002_recamera_emmc/
export PATH=$HOME/recamera/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH
```

Luego, descarga el proyecto **[Realtime_detection_http](https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/Realtime_detection_http.zip)** y compílalo.

```
cd Realtime_detection_http/
mkdir build && cd build
cmake ..
make
```

La presencia del archivo ejecutable verde **Realtime_detection_http** en el directorio de compilación indica una compilación exitosa:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/1.png" /></div>

Luego abre la terminal de reCamera, y copia el archivo ejecutable al directorio de la terminal de reCamera.​

```
 sudo scp Realtime_detection_http recamera@192.168.42.1:/home/recamera/
```

### Preparación de ReCamera

1.Descarga el **YOLOv11** que ha sido desplegado desde **[On Device Models](https://wiki.seeedstudio.com/es/recamera_on_device_models/)**, luego copia el archivo **.cvimodel** del modelo a tu terminal reCamera:**/home/recamera/**.
2.Antes de ejecutar el código, por favor accede al [espacio de trabajo](http://192.168.42.1/#/workspace) de reCamera para terminar el proceso (consulta **[Develop with c/c++](https://wiki.seeedstudio.com/es/recamera_develop_with_c_cpp)**) para prevenir el consumo de memoria.
3.Luego navega a **/etc/init.d/**, copia tanto las carpetas **S93sscma-supervisor** como **S91sscma-node** a **/home/recamera/** u otra ubicación para respaldo, y elimina las carpetas originales **S93sscma-supervisor** y **S91sscma-node** para prevenir el consumo de memoria y la ocupación del programa.​

```
cd /etc/init.d/
sudo scp S93sscma-supervisor /home/recamera/
sudo scp S91sscma-node /home/recamera/
sudo rm -r S93sscma-supervisor
sudo rm -r S91sscma-node
```

## Ejecutar el programa

Ejecuta el programa como administrador bajo **/home/recamera/** en la terminal de reCamera:

```
sudo ./Realtime_detection_http
```

## Resultados

La terminal muestra lo siguiente, indicando el funcionamiento normal del programa:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/2.png" /></div>

Puedes acceder a http://192.168.42.1/modeldetector a través del navegador web o Postman. La reCamera capturará inmediatamente una foto y devolverá los objetos detectados por YOLOv11.​
Navegador:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/3.png" /></div>

Postman:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/4.png" /></div>

La información devuelta incluye los siguientes datos:​​

- **Code**: 1 (Ejecutándose)
- **Msg**: Mensajes de error
- **Initialize_camera_duration**: La duración de inicialización de la cámara se muestra solo durante el primer acceso.​
- **Initialize_model_duration**: La duración de inicialización del modelo se muestra solo durante el primer acceso.​
- **Data**:
  - ​**Score**: Puntuación de confianza de detección (0-1)
  - **Target**: Nombre del objeto detectado
  - **Box**: [x1, y1, x2, y2]​: Coordenadas del cuadro de detección (en píxeles representando los bordes [izquierdo, superior, derecho, inferior])
  - ​**Center**: [x, y]​: Posición central normalizada del cuadro de detección (proporción relativa al ancho/alto de la imagen)
  - ​**Size**: [w, h]​: Ancho y alto normalizados del cuadro de detección (proporción relativa a las dimensiones de la imagen)
  - **Release_duration**: Tiempo tomado para limpiar la caché de la cámara (ms)
  - ​**Capture_duration**: Duración de adquisición de imagen (ms)
  - ​**Image_preprocessing_duration**: Duración de preparación de imagen antes de la inferencia (ms)
  - **Detection_duration**: Duración de detección del modelo (ms) (Incluyendo Preprocesamiento, Inferencia, Postprocesamiento)
- ​**Duration**: Tiempo total de ejecución del programa (ms)
- **Timestamp**: Marca de tiempo Unix

La terminal mostrará:​

- Parámetros de inicialización de la cámara​:
  - Resolución: **1920×1080**
  - Velocidad de fotogramas: **5 fps**
  - Canal de captura: **Canal 2**
- Tamaño de imagen capturada (ej. **Tamaño Jpeg: 216149 (píxeles)**)
- ​Uso de memoria (MB) durante diferentes pasos：
  - Pre-captura (**Memory usage**)
  - Liberando (**Memory usage_during_**)
  - Post-captura (**Memory usage_after**)
  - Después del preprocesamiento de imagen (**Memory usage_before_model**)
  - Después de la detección del modelo (**Memory usage_after_model**)
- Duración de detección del modelo (ms)
  - Preprocesamiento (ej.**pre: 9ms**)
  - Inferencia (ej.**infer: 40ms**)
  - Postprocesamiento (ej.**post:395ms**)

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/5.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/6.png" /></div>

En la terminal de reCamera, las imágenes detectadas pueden guardarse automáticamente:​
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/7.jpg" /></div>

Puedes acceder continuamente con tu dispositivo para obtener resultados de detección en tiempo real para aplicaciones como seguridad inteligente y vigilancia.

Puedes modificar el formato del mensaje devuelto en **registerModelDetector()** (**Realtime_detection_http/src/http.cpp**) y **model_detector()** (**Realtime_detection_http/src/model_detector.cpp**).
También puedes usar tu propio modelo desplegado al llamar **initialize_model(const std::string& model_path)** en **registerModelDetector()**, y modificar la configuración de inicialización de la cámara en **initialize_camera()**(**Realtime_detection_http/src/model_detector.cpp**):

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/8.png" /></div>

Después de la detección, puedes presionar Ctrl+C para terminar la operación.​El programa detendrá la cámara.​

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/9.png" /></div>

Para más detalles, consulta nuestro [repositorio de GitHub](https://github.com/Seeed-Studio/OSHW-reCamera-Series).

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/OSHW-reCamera-Series" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

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
