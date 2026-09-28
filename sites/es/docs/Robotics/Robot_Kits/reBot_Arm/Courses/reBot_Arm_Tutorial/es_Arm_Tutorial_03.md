---
description: "Capítulo 3 del Curso para Principiantes de IA Física de Seeed: la lista de hardware práctico necesario para cada etapa, incluyendo unidades de control principales, el reBot Arm, cámaras, brazo líder y soportes imprimibles."
title: Capítulo 3 - Selección de hardware para los cursos
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - Robotic Arm
  - Hardware
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_3
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: ZhuYaoHui
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/es/rebot_physical_ai_course_chapter_3/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 1 · Capítulo 3 · Teoría y práctica</span>
    <h2>3. Selección de hardware para los cursos posteriores</h2>
    <p>
      Capítulo 3 del Curso para Principiantes de IA Física de Seeed: la lista de hardware práctico
      necesario para cada etapa, incluyendo unidades de control principales, el reBot Arm, cámaras, brazo líder
      y soportes imprimibles.
    </p>
    <div className="hero-actions">
      <a href="#main-control-unit">Unidad de control principal</a>
      <a href="#stage-2">Hardware por etapa</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Lo que necesitarás</strong>
    <span>Un dispositivo de control principal (se recomienda Ubuntu) para todos los capítulos.</span>
    <span>El reBot Arm B601 (DM o RS) más un brazo líder para las etapas de teleoperación.</span>
    <span>Cámaras y soportes imprimibles para las etapas de visión y aprendizaje por imitación.</span>
  </div>
</section>

<RebotCourseNav />

## 3.1 Selección de hardware para los cursos posteriores

<section id="hardware-selection" className="section-card">
  <div className="section-title">
    <span>Hardware</span>
    <h2>3.1 Selección de hardware para los cursos posteriores</h2>
  </div>

Esta sección presenta la lista de hardware práctico necesario para cada capítulo. El alumnado puede comprar según su propia situación.

A lo largo del curso, necesitarás usar tu propio ordenador como dispositivo de despliegue de algoritmos. Puede ser Ubuntu, Mac o incluso una Raspberry Pi y Jetson. Sin embargo, recuerda **no usar Windows, WSL ni una máquina virtual con Ubuntu**, de lo contrario dedicarás mucho esfuerzo a resolver errores y reducirás tu eficiencia de aprendizaje.

### Unidad de control principal

Todos los capítulos requieren un dispositivo de control principal como punto final de despliegue de tu código. A continuación se muestran nuestros dispositivos y sistemas recomendados:

| Hardware requerido | Enlace | Cantidad | Notas | Capítulos cubiertos |
| :--- | :--- | :---: | :--- | :--- |
| Sobremesa o portátil | - | 1 | Sistema nativo Ubuntu 22.04, GTX 4080 o superior con más de 12 GB de VRAM, más de 16 GB de RAM | Todos los capítulos |
| reComputer Robotics J4012 | [Bazaar](https://www.seeedstudio.com/reComputer-Robotics-J3011-with-GMSL-extension-board-p-6538.html) | 1 | - | Etapa 2, Etapa 3, Etapa 5, Etapa 6, Etapa 7 |
| NVIDIA Jetson AGX Thor 128G | [Bazaar](https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html) | 1 | - | Etapa 2, Etapa 3, Etapa 4, Etapa 5, Etapa 6, Etapa 7 |

### Etapa 2: Hardware del brazo robótico y control básico

| Hardware requerido | Enlace | Cantidad | Notas |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - Elige uno de DM/RS<br/>- Para reducir la presión de compra, también puedes comprar la versión solo con piezas. Seeed también proporciona tutoriales de montaje muy detallados y paso a paso.<br/>- Debido a que la fuente de alimentación enviada por Seeed utiliza materiales ignífugos, el precio es algo más alto. También puedes comprar por tu cuenta fuentes de alimentación originales Mean Well (Taiwán). |

### Etapa 3: Aprendizaje por imitación y LeRobot

| Hardware requerido | Enlace | Cantidad | Notas |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - Elige uno de DM/RS<br/>- Para reducir la presión de compra, también puedes comprar la versión solo con piezas. Seeed también proporciona tutoriales de montaje muy detallados y paso a paso.<br/>- Debido a que la fuente de alimentación enviada por Seeed utiliza materiales ignífugos, el precio es algo más alto. También puedes comprar por tu cuenta fuentes de alimentación originales Mean Well (Taiwán). |
| reBot Arm 102 Leader Arm | [reBot Arm 102 Leader Arm](https://www.seeedstudio.com/Star-Arm-102-p-6765.html)<br/>[Power for leader arm](https://www.seeedstudio.com/AC-DC-Power-Adapter-DC5521-Male-12V-2A-1500mm-p-6839.html) | 1 | - |
| Cámara monocular de muñeca 720P | [UVC Monocular Camera](https://www.seeedstudio.com/ET-S231-90-USB-Camera-p-6684.html) | 2 | - |
| Soporte para cámara de muñeca | [UVC32_mount.step](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-3/UVC32_mount.step) | 1 | Necesitas imprimir esto tú mismo. Si no tienes impresora, puedes contactar con atención al cliente para obtener uno gratis. |
| Soporte superior para cámara Hikvision | [Single Mount + Universal Ring + Live Overhead; Universal](https://item.taobao.com/item.htm?spm=tbpc.boughtlist.suborder_itemtitle.1.49cb2e8dt6KH1K&id=797067194359&mi_id=0000qWvzUV0CAietxWIGsLRo68nEdNUwWmvnKFhXbqbu1Ac) | 1 | - |

### Etapa 4: VLA e Isaac Groot

| Hardware requerido | Enlace | Cantidad | Notas |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - Elige uno de DM/RS<br/>- Para reducir la presión de compra, también puedes comprar la versión solo con piezas. Seeed también proporciona tutoriales de montaje muy detallados y paso a paso.<br/>- Debido a que la fuente de alimentación enviada por Seeed utiliza materiales ignífugos, el precio es algo más alto. También puedes comprar por tu cuenta fuentes de alimentación originales Mean Well (Taiwán). |
| reBot Arm 102 Leader Arm | [reBot Arm 102 Leader Arm](https://www.seeedstudio.com/Star-Arm-102-p-6765.html)<br/>[Power for leader arm](https://www.seeedstudio.com/AC-DC-Power-Adapter-DC5521-Male-12V-2A-1500mm-p-6839.html) | 1 | - |
| Cámara monocular de muñeca 720P | [UVC Monocular Camera](https://www.seeedstudio.com/ET-S231-90-USB-Camera-p-6684.html) | 2 | - |
| Soporte para cámara de muñeca | [UVC32_mount.step](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-3/UVC32_mount.step) | 1 | Necesitas imprimir esto tú mismo. Si no tienes impresora, puedes contactar con atención al cliente para obtener uno gratis. |
| Soporte superior para cámara Hikvision | [Single Mount + Universal Ring + Live Overhead; Universal](https://item.taobao.com/item.htm?spm=tbpc.boughtlist.suborder_itemtitle.1.49cb2e8dt6KH1K&id=797067194359&mi_id=0000qWvzUV0CAietxWIGsLRo68nEdNUwWmvnKFhXbqbu1Ac) | 1 | - |

### Etapa 5: Matemáticas del brazo robótico y control de movimiento

| Hardware requerido | Enlace | Cantidad | Notas |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - Elige uno de DM/RS<br/>- Para reducir la presión de compra, también puedes comprar la versión solo con piezas. Seeed también proporciona tutoriales de montaje muy detallados y paso a paso.<br/>- Debido a que la fuente de alimentación enviada por Seeed utiliza materiales ignífugos, el precio es algo más alto. También puedes comprar por tu cuenta fuentes de alimentación originales Mean Well (Taiwán). |

### Etapa 6: Visión del brazo robótico y agarre autónomo

| Hardware requerido | Enlace | Cantidad | Notas |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - Elige uno de DM/RS<br/>- Para reducir la presión de compra, también puedes comprar la versión solo con piezas. Seeed también proporciona tutoriales de montaje muy detallados y paso a paso.<br/>- Debido a que la fuente de alimentación enviada por Seeed utiliza materiales ignífugos, el precio es algo más alto. También puedes comprar por tu cuenta fuentes de alimentación originales Mean Well (Taiwán). |
| Cámara de profundidad Realsense 435i u Orbbec Gemini2 o cámara estéreo Realsense 405 | [Intel RealSense Depth Camera D435i](https://www.seeedstudio.com/Intel-RealSense-Depth-Camera-D435i-p-4423.html) | 1 | - |
| Soporte de muñeca para cámara | [D435_Gemini2_Mount.step](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-3/D435_Gemini2_Mount.step)<br/>[D405_305_Mount.step](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-3/D405_305_Mount.step) | 1 | Necesitas imprimir esto tú mismo. Si no tienes impresora, puedes contactar con atención al cliente para obtener uno gratis. |

### Etapa 7: ROS2 e integración de sistemas robóticos

| Hardware requerido | Enlace | Cantidad | Notas |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - Elige uno de DM/RS<br/>- Para reducir la presión de compra, también puedes comprar la versión solo con piezas. Seeed también proporciona tutoriales de montaje muy detallados y paso a paso.<br/>- Debido a que la fuente de alimentación enviada por Seeed utiliza materiales ignífugos, el precio es algo más alto. También puedes comprar por tu cuenta fuentes de alimentación originales Mean Well (Taiwán). |

### Etapa 8: Simulación de brazo robótico con MuJoCo e Isaac Sim

- Se requiere un ordenador con 32 GB de RAM, una GPU 4080 o superior y Ubuntu 22.04.
- El brazo robótico se utiliza para la sincronización de realidad virtual.

| Hardware requerido | Enlace | Cantidad | Notas |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - Elige uno de DM/RS<br/>- Para reducir la presión de compra, también puedes comprar la versión solo con piezas. Seeed también proporciona tutoriales de montaje muy detallados y paso a paso.<br/>- Debido a que la fuente de alimentación enviada por Seeed utiliza materiales ignífugos, el precio es algo más alto. También puedes comprar por tu cuenta fuentes de alimentación originales Mean Well (Taiwán). |

</section>

</div>
