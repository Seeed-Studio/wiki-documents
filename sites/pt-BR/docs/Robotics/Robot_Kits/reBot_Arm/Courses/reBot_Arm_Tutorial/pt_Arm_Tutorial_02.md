---
description: "Capítulo 2 do Curso para Iniciantes em IA Física da Seeed — conheça o projeto open-source reBot Arm, a diferença entre as versões DM e RS e seu hardware e software de código aberto."
title: Capítulo 2 - Hardware e o Projeto Open-Source
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - Robotic Arm
  - Open Source
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_2
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: ZhuYaoHui
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/pt-br/rebot_physical_ai_course_chapter_2/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 1 · Capítulo 2 · Teoria &amp; Prática</span>
    <h2>2. Conhecendo o Hardware do reBot Arm e o Projeto Open-Source</h2>
    <p>
      Capítulo 2 do Curso para Iniciantes em IA Física da Seeed — conheça o reBot Arm,
      o projeto open-source, a diferença entre as versões DM e RS e seu hardware e software
      de código aberto.
    </p>
    <div className="hero-actions">
      <a href="#what-is-rebot-arm">O que é o reBot Arm</a>
      <a href="#open-source">Open source</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Neste capítulo</strong>
    <span>2.1 O que é o reBot Arm</span>
    <span>2.2 Por que projetar duas versões: DM e RS</span>
    <span>2.3 Comparação de parâmetros entre reBot Arm DM e reBot Arm RS</span>
    <span>2.4 Hardware Open-Source e Software Open-Source</span>
  </div>
</section>

<RebotCourseNav />

## 2.1 O que é o reBot Arm

<section id="what-is-rebot-arm" className="section-card">
  <div className="section-title">
    <span>Visão geral</span>
    <h2>2.1 O que é o reBot Arm</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-2/ch2-01.png" alt="reBot Arm" />
</div>

O reBot Arm B601 é um braço robótico totalmente open-source lançado pela Seeed Studio, desde o hardware estrutural até o software. É um braço robótico de mesa open-source para educação em robótica, desenvolvimento de algoritmos e pesquisa em inteligência incorporada. Ele adota uma estrutura mecânica modular, oferece aproximadamente 750 mm de alcance e 6+1 graus de liberdade, conecta-se a um computador via USB-CAN e pode ser usado para experimentos como controle de braço robótico, visão robótica, aprendizado por imitação e VLA.

O reBot Arm não é apenas hardware de braço robótico; ele também fornece materiais completos de desenvolvimento, desde o controle de baixo nível até aplicações de IA de alto nível. A partir deste projeto open-source, você pode aprender do zero:

- Projeto e montagem de braço robótico (vídeo detalhado do produto DM);
- Calibração do braço robótico e controle de juntas;
- Cinemática direta, cinemática inversa e planejamento de trajetória;
- Análise de dinâmica com Pinocchio e visualização com MeshCat;
- Teleoperação mestre–escravo Leader–Follower;
- Coleta de dados, treinamento e avaliação com LeRobot; gravação de página web no Hugging Face;
- Reconhecimento visual RGB-D e preensão autônoma;
- Isaac Sim;
- Integração com ROS2 e desenvolvimento secundário;
- Adaptação de modelos de política de robôs como ACT e GR00T.

Seu principal objetivo é permitir que os usuários aprendam e validem algoritmos de braço robótico e de inteligência incorporada usando hardware relativamente de baixo custo, aberto e modificável.

</section>

## 2.2 Por que projetar duas versões: DM e RS

<section id="two-versions" className="section-card">
  <div className="section-title">
    <span>Versões de hardware</span>
    <h2>2.2 Por que projetar duas versões: DM e RS</h2>
  </div>

O reBot Arm B601 oferece duas versões:

- **B601-DM**
- **B601-RS**

Ambas as versões usam uma estrutura mecânica semelhante e um sistema de software de camada superior semelhante, mas utilizam diferentes tipos de motores de junta.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-2/ch2-02.png" alt="DM and RS comparison" />
</div>

</section>

## 2.3 Comparação de parâmetros entre reBot Arm DM e reBot Arm RS

<section id="parameter-comparison" className="section-card">
  <div className="section-title">
    <span>Comparação</span>
    <h2>2.3 Comparação de parâmetros entre reBot Arm DM e reBot Arm RS</h2>
  </div>

| Produto                | reBot Arm DM                                                                     | reBot Arm RS                                                                     |
| ---------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **SKU**                | 100065783                                                                        | 100019336                                                                        |
| **Purchase Link**      | [Bazaar](https://www.seeedstudio.com/reBot-Arm-B601-DM-p-6740.html) | [Bazaar](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) |
| **Degrees of Freedom** | 6+1                                                                              | 6+1                                                                              |
| **Rated Payload**      | **1.5 kg**                                                                       | **2.5 kg**                                                                       |
| **Maximum Payload**    | **2.5 kg**                                                                       | **5 kg**                                                                         |
| **Repeatability**      | **0.2 mm**                                                                       | **0.1 mm**                                                                       |
| **Reach**              | 767 mm                                                                           | 754.7 mm                                                                         |
| **Communication**      | Barramento CAN via adaptador USB-CAN                                            | Barramento CAN via adaptador USB-CAN                                            |
| **Power Supply**       | 24V DC, 15A                                                                      | 48V DC, 12.5A                                                                    |
| **Actuator Type**      | [Damiao DM Planetary Gear Joint Actuators](https://www.seeedstudio.com/DM4340P-Actuator-p-6663.html)    | [RoboStride Quasi-Direct-Drive Joint Actuators](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html)  |


</section>

## 2.4 Hardware Open-Source e Software Open-Source

<section id="open-source" className="section-card">
  <div className="section-title">
    <span>Open Source</span>
    <h2>2.4 Hardware Open-Source e Software Open-Source</h2>
  </div>

Tanto o hardware quanto os materiais de software do reBot Arm são abertos ao público.

Repositório no GitHub: <a href="https://github.com/Seeed-Projects/reBot-DevArm/" target="_blank" rel="noopener noreferrer">https://github.com/Seeed-Projects/reBot-DevArm/</a>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-2/ch2-03.png" alt="Open-source hardware and software" />
</div>

</section>

</div>
