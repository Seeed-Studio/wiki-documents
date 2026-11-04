---
description: "Capítulo 3 del curso para principiantes de SO-ARM Physical AI — la lista de hardware práctico necesario en cada etapa: unidad de control principal, el kit SO-ARM, cámaras y cámaras de profundidad opcionales."
title: Capítulo 3 - Selección de hardware para el curso
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM100
  - SO-ARM101
  - brazo robótico
  - hardware
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_3
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_chapter_3/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 1 · Capítulo 3 · Teoría y práctica</span>
    <h2>3. Selección de hardware para los capítulos siguientes</h2>
    <p>
      Capítulo 3 del curso para principiantes de SO-ARM Physical AI — la lista de hardware práctico necesario en cada etapa: unidad de control principal, el kit SO-ARM, cámaras y cámaras de profundidad opcionales.
    </p>
    <div className="hero-actions">
      <a href="#hardware-selection">Lista de hardware</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Lo que necesitarás</strong>
    <span>Una unidad de control principal (Ubuntu x86 o Jetson) para todos los capítulos.</span>
    <span>Un kit SO-ARM — ya incluye los brazos líder y seguidor.</span>
    <span>Dos cámaras USB para las etapas de imitación y VLA.</span>
    <span>Una GPU NVIDIA (o nube / sin código) para las etapas de entrenamiento.</span>
  </div>
</section>

## 3.1 Selección de hardware para los capítulos siguientes

<section id="hardware-selection" className="section-card">
  <div className="section-title">
    <span>Hardware</span>
    <h2>3.1 Selección de hardware para los capítulos siguientes</h2>
  </div>

Esta sección presenta la lista de hardware práctico necesario en cada capítulo. Cada estudiante puede comprar según su situación.

A lo largo del curso usarás tu propio ordenador como dispositivo de despliegue de algoritmos. Puede ser una máquina Ubuntu x86, una Mac o un Jetson. Pero recuerda **no usar WSL ni una máquina virtual de Ubuntu en Windows**, de lo contrario perderás mucho tiempo resolviendo errores y reducirás tu eficiencia de aprendizaje.

### Unidad de control principal

Todos los capítulos requieren un dispositivo de control principal como punto de despliegue del código. Dispositivos y sistemas recomendados:

| Hardware necesario | Enlace | Cantidad | Notas | Capítulos |
| :--- | :--- | :---: | :--- | :--- |
| PC de escritorio o portátil | - | 1 | Ubuntu 22.04 nativo, CUDA 12+, Python 3.12, Torch 2.6+; para entrenar, GPU NVIDIA con 12GB+ de VRAM (p. ej. RTX 4080) y 16GB+ de RAM | Todos |
| reComputer Robotics J4012 (Jetson Orin) | [Bazaar](https://www.seeedstudio.com/reComputer-Robotics-J3011-with-GMSL-extension-board-p-6538.html) | 1 | JetPack 6.0 / 6.1 (JetPack 6.2 aún no compatible) | Etapa 2, 3 |
| NVIDIA Jetson AGX Thor 128G | [Bazaar](https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html) | 1 | Para inferencia GR00T N1.5 de la Etapa 4 | Etapa 2, 3, 4 |

:::tip
Si no tienes GPU de entrenamiento, aún puedes terminar el curso: entrena políticas pequeñas en un notebook gratuito en la nube (p. ej. Google Colab), ajusta GR00T en NVIDIA Brev, o usa el entrenamiento en la nube sin código del Capítulo 22 (SenseCraft Robotics).
:::

### Etapa 2: Ensamblaje del SO-ARM y control básico

| Hardware necesario | Enlace | Cantidad | Notas |
| :--- | :--- | :---: | :--- |
| Kit SO-ARM101 (líder + seguidor) | [Kit SO-ARM101 Pro](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html)<br/>[Kit SO-ARM100](https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html) | 1 | - Versión kit: incluye servos, placas, cables; imprimes o compras las piezas<br/>- Versión pre-ensamblada: sáltate el ensamblaje del Capítulo 6<br/>- Cuida las reglas de alimentación Standard (5V) vs. Pro (líder 5V / seguidor 12V) |

### Etapa 3: Aprendizaje por imitación y LeRobot

| Hardware necesario | Enlace | Cantidad | Notas |
| :--- | :--- | :---: | :--- |
| Kit SO-ARM101 (líder + seguidor) | [Bazaar](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html) | 1 | El mismo kit de la Etapa 2 |
| Cámara USB de 32 × 32 mm | - | 2 | Se requieren dos vistas (frontal + lateral, o superior + pinza); el kit incluye una, prepara la segunda |
| Alfombrilla de ratón / tapete | - | 1 | Protege y estabiliza la superficie; hace repetible la colocación de objetos |

### Etapa 4: VLA — Isaac GR00T y SenseCraft sin código

| Hardware necesario | Enlace | Cantidad | Notas |
| :--- | :--- | :---: | :--- |
| Kit SO-ARM101 (líder + seguidor) | [Bazaar](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html) | 1 | El mismo kit de la Etapa 2 |
| Cámara USB de 32 × 32 mm | - | 2 | Las claves de cámara deben coincidir entre dataset e inferencia |
| GPU de entrenamiento (o nube) | - | 1 | El ajuste fino de GR00T necesita ~25GB de VRAM (Ampere o superior, p. ej. RTX 4090 / A6000); V100 no compatible. Alternativas: nube NVIDIA Brev, o la ruta sin código del Capítulo 22 |
| NVIDIA Jetson AGX Thor (opcional, inferencia en el borde) | [Bazaar](https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html) | 1 | Ejecuta el servicio de inferencia GR00T N1.5 ajustado en el borde |

### Mejoras opcionales

| Hardware necesario | Enlace | Cantidad | Notas |
| :--- | :--- | :---: | :--- |
| Cámara de profundidad Orbbec Gemini 2 | [Bazaar](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html) | 1 | Percepción RGB-D opcional para los capítulos de cámaras |
| Archivos de pinza suave | [soarm_soft_gripper](https://github.com/xiehuangbao888/soarm_soft_gripper.git) | - | Dedos de TPU para objetos blandos, frágiles o irregulares |

</section>

</div>
