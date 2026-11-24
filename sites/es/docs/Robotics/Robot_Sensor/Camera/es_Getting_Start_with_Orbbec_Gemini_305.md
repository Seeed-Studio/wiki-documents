---
description: Conoce las especificaciones y la configuración de conexión de la cámara 3D Orbbec Gemini 305, y previsualiza los flujos de profundidad y color con Orbbec Viewer.
title: Cámara 3D Orbbec Gemini 305
keywords:
  - Orbbec
  - Gemini 305
  - Depth Camera
  - Stereo Vision
  - Robot Vision
image: https://cdn.shopify.com/s/files/1/0704/4022/2949/files/Gemini_305_00.jpg?v=1783414174
slug: /orbbec_gemini305
last_update:
  date: 11/19/2026
  author: Yang-Ci
---

<div align="center">
  <img src="https://cdn.shopify.com/s/files/1/0704/4022/2949/files/Gemini_305_00.jpg?v=1783414174" alt="Orbbec Gemini 305 3D camera" width={400} />
</div>

La Orbbec Gemini 305 es una cámara de profundidad estéreo para visión robótica de corto alcance, incluyendo montaje en muñeca, reconocimiento de objetos y agarre. Esta página cubre la versión USB; la Gemini 305g tiene diferentes interfaces, requisitos de alimentación y dimensiones. Consulta la [documentación de Orbbec](https://doc.orbbec.com/documentation/Gemini%20305%20Documentation) para más detalles.

## Características

- **Detección de profundidad a corto alcance:** Un rango de funcionamiento de 4–100 cm+ y un rango recomendado de 7–50 cm.
- **Visión estéreo:** Las cámaras estéreo proporcionan datos de profundidad junto con imágenes en color.
- **Cuerpo compacto:** La carcasa de 42 × 42 × 23 mm se adapta a instalaciones con limitaciones de espacio.
- **Sincronización y disparo:** Admite sincronización multicámara y disparos por software y hardware.
- **Conexión USB:** Una conexión USB Type-C suministra alimentación y datos; se recomienda USB 3.0.

## Especificaciones

Estas especificaciones se aplican a la versión USB de la Gemini 305. Consulta la [página de producto de Orbbec](https://www.orbbec.com/gemini-305/) para conocer las condiciones de prueba y los detalles actuales.

| Categoría | Especificación | Detalles |
| --- | --- | --- |
| Básico | Entorno de funcionamiento | Interior y exterior |
| | Rango de funcionamiento | 4–100 cm+ |
| | Rango recomendado | 7–50 cm |
| | Tecnología de profundidad / línea base | Visión estéreo / 18 mm |
| Profundidad | Precisión espacial | ≤1% (1280 × 800 a 50 cm, 90% × 90% ROI) |
| | Campo de visión de profundidad | H 88° × V 65° ±3° (1280 × 800 a 20 cm) |
| | Resolución y frecuencia de cuadro | Hasta 1280 × 800 a 30 fps; 848 × 480 a 60 fps |
| Color | Campo de visión de color | H 94° × V 68° ±3° |
| | Resolución y frecuencia de cuadro | Hasta 1280 × 800 a 60 fps |
| | Sensores | Color estéreo, obturador global |
| Eléctrico | Fuente de alimentación | 5 V CC, ≥700 mA |
| | Consumo medio de energía | Menos de 2 W |
| Físico | Dimensiones / peso | 42 × 42 × 23 mm / 68 g ±10 g |
| | Interfaz | USB Type-C, USB 3.0 y USB 2.0 |
| | Grado de protección | IP54 cuando se conecta y asegura un cable USB adecuadamente protegido |
| | Montaje | Parte inferior: un orificio roscado 1/4-20 UNC y dos orificios roscados M3; parte trasera: dos orificios roscados M3 |

## Descripción general del hardware

La cámara tiene dos lentes en la parte frontal y un puerto USB Type-C en el lateral. Antes de montarla en un brazo robótico o soporte, comprueba el campo de visión, el enrutamiento del cable y el espacio libre a lo largo de todo el movimiento previsto. Las ubicaciones de montaje y los planos de dimensiones están disponibles en la [documentación de la Gemini 305](https://doc.orbbec.com/documentation/Gemini%20305%20Documentation).

Las siguientes imágenes de la [página oficial de producto de Orbbec](https://store.orbbec.com/products/gemini-305) muestran la parte frontal de la Gemini 305, el puerto USB Type-C y los orificios de montaje inferiores y traseros.

<div align="center">
  <img src="https://store.orbbec.com/cdn/shop/files/Gemini_305_01.png?v=1783414201&amp;width=1600" alt="Front of the Gemini 305 showing its two lenses" width={360} />
  <p>Frontal: lentes estéreo</p>
  <img src="https://store.orbbec.com/cdn/shop/files/Gemini_305_07.png?v=1783414277&amp;width=1600" alt="USB Type-C port on the side of the Gemini 305" width={360} />
  <p>Lateral: puerto USB Type-C</p>
  <img src="https://store.orbbec.com/cdn/shop/files/Gemini_305_08.png?v=1783414288&amp;width=1600" alt="1/4-20 UNC and M3 mounting holes on the bottom of the Gemini 305" width={360} />
  <p>Orificios de montaje inferiores</p>
  <img src="https://store.orbbec.com/cdn/shop/files/Gemini_305_09.png?v=1783414301&amp;width=1600" alt="Two M3 mounting holes on the rear of the Gemini 305" width={360} />
  <p>Orificios de montaje traseros</p>
</div>

## Inicio rápido

### Preparar y conectar

1. Prepara una Gemini 305, un cable USB Type-C con capacidad de datos y un host que cumpla los requisitos de alimentación de la cámara. Se recomienda un puerto y cable USB 3.0 para mayor ancho de banda.
2. Monta la cámara para tu aplicación y conéctala al host con el cable USB Type-C. Para un brazo en movimiento, deja suficiente holgura de cable y evita que el cable se tense o se pellizque.

### Instalar Orbbec Viewer

1. Abre la [página de lanzamientos de Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2/releases), selecciona una versión que admita Gemini 305 y descarga el instalador o el paquete de Orbbec Viewer para el sistema operativo y la arquitectura de tu host. Los sistemas Jetson suelen usar Linux ARM64; elige el paquete x86-64 o Windows apropiado para un PC.
2. Instala o extrae el paquete e inicia Orbbec Viewer como se describe en la página de lanzamientos. Los nombres de archivo y procedimientos pueden cambiar entre versiones; en Linux, configura los permisos USB según las instrucciones de tu versión.

:::note
Gemini 305 usa **Orbbec SDK v2**; SDK v1 no es compatible con este modelo. La interfaz de Viewer y las funciones disponibles dependen de la versión de software, el firmware y la configuración del dispositivo. Consulta la [documentación de SDK v2](https://github.com/orbbec/OrbbecSDK_v2) para la instalación y los permisos del dispositivo.
:::

### Previsualizar imágenes y nubes de puntos

1. Confirma que Gemini 305 aparece en la lista de dispositivos de Orbbec Viewer y selecciónala.
2. Habilita los flujos de Depth y Color, elige la resolución y la frecuencia de cuadro ofrecidas por el dispositivo y comprueba que ambas ventanas de vista previa muestren imágenes.
3. Coloca un objeto dentro del rango recomendado y observa la imagen de profundidad a medida que cambia su distancia. Habilita la nube de puntos para una vista previa 3D o revisa la configuración de alineación depth-to-color (D2C) al alinear imágenes de color y profundidad.
4. Detén los flujos antes de desconectar la cámara. Para controles detallados, consulta la [guía de Orbbec Viewer](https://github.com/orbbec/OrbbecSDK_v2/blob/main/docs/tutorial/orbbecviewer.md).

Las siguientes imágenes proceden de la guía de Viewer 2.6.2 de Orbbec y muestran una **Gemini 335Lg**. Ilustran la interfaz y no son resultados de prueba de la Gemini 305. La Gemini 305 no tiene IMU integrada, por lo que el panel de IMU del ejemplo no indica una característica de la Gemini 305. La interfaz y las opciones disponibles dependen del dispositivo y de la versión de software.

<div align="center">
  <img src="https://raw.githubusercontent.com/orbbec/OrbbecSDK_v2/f5d59930ccb9a189f200e58fba4e2ae42664792d/docs/tutorial/images/image1.jpg" alt="Orbbec Viewer example showing the device list, stream controls, and image previews using a Gemini 335Lg" width={800} />
  <p>Ejemplo de Viewer: controles de flujo en la parte superior, ajustes a la izquierda y vistas previas a la derecha</p>
  <img src="https://raw.githubusercontent.com/orbbec/OrbbecSDK_v2/f5d59930ccb9a189f200e58fba4e2ae42664792d/docs/tutorial/images/image23.jpg" alt="Orbbec Viewer example showing a point cloud and depth-to-color alignment using a Gemini 335Lg" width={800} />
  <p>Ejemplo de Viewer: nube de puntos y alineación depth-to-color</p>
</div>

### Solución de problemas

- **El dispositivo no aparece en la lista:** Vuelve a conectar el cable, confirma que admite datos y no solo alimentación, y comprueba la fuente de alimentación del host. En Linux, revisa también los permisos USB según las instrucciones de SDK v2.
- **Un flujo no se inicia o es inestable:** Inicia profundidad o color por separado y prueba otras resoluciones y frecuencias de cuadro admitidas por el dispositivo. Comprueba el puerto USB, el cable, el firmware y la compatibilidad del SDK.
- **Resultados de profundidad inesperados:** Mueve el sujeto al rango recomendado, comprueba que las lentes no estén obstruidas y ajusta en Viewer los parámetros admitidos por el dispositivo para la escena.

## ROS 2

Para usar la cámara con ROS 2, sigue la [guía de instalación de Orbbec SDK ROS 2 Wrapper v2](https://orbbec.github.io/OrbbecSDK_ROS2/) para configurar el espacio de trabajo y los permisos del dispositivo. Gemini 305 usa la rama `v2-main`. Después de instalar una versión que admita este modelo y de hacer `source` del espacio de trabajo, lanza el archivo proporcionado:

```bash
ros2 launch orbbec_camera gemini_301_series.launch.py
```

En otra terminal con el entorno de ROS 2 configurado, usa `ros2 topic list` para inspeccionar los tópicos disponibles. Los tópicos y parámetros dependen de la versión instalada y de la configuración de lanzamiento. Estos pasos se basan en la documentación oficial y no se han verificado con una Gemini 305 física para esta página.

## Recursos

- [Documentación y hoja de datos de Gemini 305](https://doc.orbbec.com/documentation/Gemini%20305%20Documentation)
- [Descargas de Orbbec SDK v2 y Viewer](https://github.com/orbbec/OrbbecSDK_v2/releases)
- [Guía de Orbbec Viewer](https://github.com/orbbec/OrbbecSDK_v2/blob/main/docs/tutorial/orbbecviewer.md)
- [Orbbec SDK ROS 2 Wrapper](https://github.com/orbbec/OrbbecSDK_ROS2)

## Recursos relacionados

- [Cámara 3D Orbbec Gemini 336](/es/orbbec_gemini336/)
- [Cámara de profundidad Orbbec en ROS](/es/orbbec_depth_camera_on_ros/)

## Soporte técnico y debate sobre el producto

Para obtener ayuda, visita el [foro de Seeed](https://forum.seeedstudio.com/) o [contacta con Seeed](https://www.seeedstudio.com/contacts).
