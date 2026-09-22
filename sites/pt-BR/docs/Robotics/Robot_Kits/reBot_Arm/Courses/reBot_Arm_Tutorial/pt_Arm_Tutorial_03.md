---
description: "Capítulo 3 do Curso para Iniciantes em Inteligência Incorporada da Seeed — a lista de hardware prático necessária para cada etapa, incluindo unidades de controle principal, o reBot Arm, câmeras, braço líder e suportes imprimíveis."
title: Capítulo 3 - Seleção de Hardware para os Cursos
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - Robotic Arm
  - Hardware
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_3
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: LiuJunjie
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/pt-br/rebot_embodied_ai_course_chapter_3/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 1 · Capítulo 3 · Teoria &amp; Prática</span>
    <h2>3. Seleção de Hardware para os Cursos Subsequentes</h2>
    <p>
      Capítulo 3 do Curso para Iniciantes em Inteligência Incorporada da Seeed — a lista de hardware prático
      necessária para cada etapa, incluindo unidades de controle principal, o reBot Arm, câmeras, braço líder
      e suportes imprimíveis.
    </p>
    <div className="hero-actions">
      <a href="#unidade-de-controle-principal">Unidade de controle principal</a>
      <a href="#etapa-2">Hardware por etapa</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>O que você vai precisar</strong>
    <span>Um dispositivo de controle principal (Ubuntu recomendado) para todos os capítulos.</span>
    <span>O reBot Arm B601 (DM ou RS) mais um braço líder para as etapas de teleoperação.</span>
    <span>Câmeras e suportes imprimíveis para as etapas de visão e aprendizado por imitação.</span>
  </div>
</section>

<RebotCourseNav />

## 3.1 Seleção de Hardware para os Cursos Subsequentes

<section id="hardware-selection" className="section-card">
  <div className="section-title">
    <span>Hardware</span>
    <h2>3.1 Seleção de Hardware para os Cursos Subsequentes</h2>
  </div>

Esta seção apresenta a lista de hardware prático necessária para cada capítulo. Os alunos podem comprar de acordo com a sua própria situação.

Ao longo do curso, você precisará usar o seu próprio computador como dispositivo de implantação de algoritmos. Ele pode ser Ubuntu, Mac ou até mesmo um Raspberry Pi e Jetson. No entanto, lembre-se de **não usar Windows, WSL ou um Ubuntu em máquina virtual**, caso contrário você gastará muito esforço resolvendo bugs e reduzirá sua eficiência de aprendizado.

### Unidade de Controle Principal

Todos os capítulos exigem um dispositivo de controle principal como ponto final de implantação do seu código. Abaixo estão nossos dispositivos e sistemas recomendados:

| Hardware Necessário | Link | Quantidade | Observações | Capítulos Abrangidos |
| :--- | :--- | :---: | :--- | :--- |
| Desktop ou Laptop | - | 1 | Sistema nativo Ubuntu 22.04, GTX 4080 ou superior com 12GB+ de VRAM, 16GB+ de RAM | Todos os capítulos |
| reComputer Robotics J4012 | [Bazaar](https://www.seeedstudio.com/reComputer-Robotics-J3011-with-GMSL-extension-board-p-6538.html) | 1 | - | Etapa 2, Etapa 3, Etapa 5, Etapa 6, Etapa 7 |
| NVIDIA Jetson AGX Thor 128G | [Bazaar](https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html) | 1 | - | Etapa 2, Etapa 3, Etapa 4, Etapa 5, Etapa 6, Etapa 7 |

### Etapa 2: Hardware do Braço Robótico e Controle Básico

| Hardware Necessário | Link | Quantidade | Observações |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - Escolha um entre DM/RS<br/>- Para reduzir a pressão de compra, você também pode adquirir a versão somente com peças. A Seeed também fornece tutoriais de montagem muito detalhados, passo a passo.<br/>- Como a fonte de alimentação enviada pela Seeed usa materiais resistentes ao fogo, o preço é um pouco mais alto. Você também pode comprar por conta própria fontes de alimentação originais Mean Well (Taiwan). |

### Etapa 3: Aprendizado por Imitação e LeRobot

| Hardware Necessário | Link | Quantidade | Observações |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - Escolha um entre DM/RS<br/>- Para reduzir a pressão de compra, você também pode adquirir a versão somente com peças. A Seeed também fornece tutoriais de montagem muito detalhados, passo a passo.<br/>- Como a fonte de alimentação enviada pela Seeed usa materiais resistentes ao fogo, o preço é um pouco mais alto. Você também pode comprar por conta própria fontes de alimentação originais Mean Well (Taiwan). |
| reBot Arm 102 Leader Arm | [reBot Arm 102 Leader Arm](https://www.seeedstudio.com/Star-Arm-102-p-6765.html)<br/>[Power for leader arm](https://www.seeedstudio.com/AC-DC-Power-Adapter-DC5521-Male-12V-2A-1500mm-p-6839.html) | 1 | - |
| Câmera Monocular de Pulso 720P | [UVC Monocular Camera](https://www.seeedstudio.com/ET-S231-90-USB-Camera-p-6684.html) | 2 | - |
| Suporte de Pulso para Câmera | [UVC32_mount.step](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-3/UVC32_mount.step) | 1 | Você precisa imprimir isto por conta própria. Se você não tiver uma impressora, pode entrar em contato com o atendimento ao cliente para obter um gratuitamente. |
| Suporte Suspenso para Câmera Hikvision | [Single Mount + Universal Ring + Live Overhead; Universal](https://item.taobao.com/item.htm?spm=tbpc.boughtlist.suborder_itemtitle.1.49cb2e8dt6KH1K&id=797067194359&mi_id=0000qWvzUV0CAietxWIGsLRo68nEdNUwWmvnKFhXbqbu1Ac) | 1 | - |

### Etapa 4: VLA e Isaac Groot

| Hardware Necessário | Link | Quantidade | Observações |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - Escolha um entre DM/RS<br/>- Para reduzir a pressão de compra, você também pode adquirir a versão somente com peças. A Seeed também fornece tutoriais de montagem muito detalhados, passo a passo.<br/>- Como a fonte de alimentação enviada pela Seeed usa materiais resistentes ao fogo, o preço é um pouco mais alto. Você também pode comprar por conta própria fontes de alimentação originais Mean Well (Taiwan). |
| reBot Arm 102 Leader Arm | [reBot Arm 102 Leader Arm](https://www.seeedstudio.com/Star-Arm-102-p-6765.html)<br/>[Power for leader arm](https://www.seeedstudio.com/AC-DC-Power-Adapter-DC5521-Male-12V-2A-1500mm-p-6839.html) | 1 | - |
| Câmera Monocular de Pulso 720P | [UVC Monocular Camera](https://www.seeedstudio.com/ET-S231-90-USB-Camera-p-6684.html) | 2 | - |
| Suporte de Pulso para Câmera | [UVC32_mount.step](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-3/UVC32_mount.step) | 1 | Você precisa imprimir isto por conta própria. Se você não tiver uma impressora, pode entrar em contato com o atendimento ao cliente para obter um gratuitamente. |
| Suporte Suspenso para Câmera Hikvision | [Single Mount + Universal Ring + Live Overhead; Universal](https://item.taobao.com/item.htm?spm=tbpc.boughtlist.suborder_itemtitle.1.49cb2e8dt6KH1K&id=797067194359&mi_id=0000qWvzUV0CAietxWIGsLRo68nEdNUwWmvnKFhXbqbu1Ac) | 1 | - |

### Etapa 5: Matemática do Braço Robótico e Controle de Movimento

| Hardware Necessário | Link | Quantidade | Observações |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - Escolha um entre DM/RS<br/>- Para reduzir a pressão de compra, você também pode adquirir a versão somente com peças. A Seeed também fornece tutoriais de montagem muito detalhados, passo a passo.<br/>- Como a fonte de alimentação enviada pela Seeed usa materiais resistentes ao fogo, o preço é um pouco mais alto. Você também pode comprar por conta própria fontes de alimentação originais Mean Well (Taiwan). |

### Etapa 6: Visão de Braço Robótico e Pega Autônoma

| Hardware Necessário | Link | Quantidade | Observações |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - Escolha um entre DM/RS<br/>- Para reduzir a pressão de compra, você também pode adquirir a versão somente com peças. A Seeed também fornece tutoriais de montagem muito detalhados, passo a passo.<br/>- Como a fonte de alimentação enviada pela Seeed usa materiais resistentes ao fogo, o preço é um pouco mais alto. Você também pode comprar por conta própria fontes de alimentação originais Mean Well (Taiwan). |
| Câmera de Profundidade Realsense 435i ou Orbbec Gemini2 ou Câmera Estéreo Realsense 405 | [Intel RealSense Depth Camera D435i](https://www.seeedstudio.com/Intel-RealSense-Depth-Camera-D435i-p-4423.html) | 1 | - |
| Suporte de Pulso para Câmera | [D435_Gemini2_Mount.step](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-3/D435_Gemini2_Mount.step)<br/>[D405_305_Mount.step](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-3/D405_305_Mount.step) | 1 | Você precisa imprimir isto por conta própria. Se você não tiver uma impressora, pode entrar em contato com o atendimento ao cliente para obter um gratuitamente. |

### Etapa 7: ROS2 e Integração de Sistema Robótico

| Hardware Necessário | Link | Quantidade | Observações |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - Escolha um entre DM/RS<br/>- Para reduzir a pressão de compra, você também pode adquirir a versão somente com peças. A Seeed também fornece tutoriais de montagem muito detalhados, passo a passo.<br/>- Como a fonte de alimentação enviada pela Seeed usa materiais resistentes ao fogo, o preço é um pouco mais alto. Você também pode comprar por conta própria fontes de alimentação originais Mean Well (Taiwan). |

### Etapa 8: Simulação de Braço Robótico com MuJoCo e Isaac Sim

- É necessário um computador com 32GB de RAM, uma GPU 4080 ou superior e Ubuntu 22.04.
- O braço robótico é usado para sincronização de realidade virtual.

| Hardware Necessário | Link | Quantidade | Observações |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - Escolha um entre DM/RS<br/>- Para reduzir a pressão de compra, você também pode adquirir a versão somente com peças. A Seeed também fornece tutoriais de montagem muito detalhados, passo a passo.<br/>- Como a fonte de alimentação enviada pela Seeed usa materiais resistentes ao fogo, o preço é um pouco mais alto. Você também pode comprar por conta própria fontes de alimentação originais Mean Well (Taiwan). |

</section>

</div>
