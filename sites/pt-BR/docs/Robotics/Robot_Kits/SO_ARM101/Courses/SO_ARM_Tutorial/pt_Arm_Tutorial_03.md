---
description: "Capítulo 3 do curso para iniciantes em SO-ARM Physical AI — a lista de hardware prático necessário em cada fase: unidade de controle principal, o kit SO-ARM, câmeras e câmeras de profundidade opcionais."
title: Capítulo 3 - Seleção de hardware para o curso
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM100
  - SO-ARM101
  - braço robótico
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
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_chapter_3/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Fase 1 · Capítulo 3 · Teoria e prática</span>
    <h2>3. Seleção de hardware para os próximos capítulos</h2>
    <p>
      Capítulo 3 do curso para iniciantes em SO-ARM Physical AI — a lista de hardware prático necessário em cada fase: unidade de controle principal, o kit SO-ARM, câmeras e câmeras de profundidade opcionais.
    </p>
    <div className="hero-actions">
      <a href="#hardware-selection">Lista de hardware</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>O que você precisará</strong>
    <span>Uma unidade de controle principal (Ubuntu x86 ou Jetson) para todos os capítulos.</span>
    <span>Um kit SO-ARM — já inclui os braços líder e seguidor.</span>
    <span>Duas câmeras USB para as fases de imitação e VLA.</span>
    <span>Uma GPU NVIDIA (ou nuvem / sem código) para as fases de treinamento.</span>
  </div>
</section>

## 3.1 Seleção de hardware para os próximos capítulos

<section id="hardware-selection" className="section-card">
  <div className="section-title">
    <span>Hardware</span>
    <h2>3.1 Seleção de hardware para os próximos capítulos</h2>
  </div>

Esta seção apresenta a lista de hardware necessária em cada capítulo. Cada um pode comprar conforme a própria situação.

Ao longo do curso, você usará seu próprio computador como dispositivo de implantação de algoritmos — pode ser uma máquina Ubuntu x86, um Mac ou um Jetson. Mas lembre-se de **não usar WSL ou Ubuntu em máquina virtual no Windows**, senão gastará muito tempo resolvendo bugs e reduzirá sua eficiência de aprendizado.

### Unidade de controle principal

Todos os capítulos exigem uma unidade de controle como destino de implantação do código. Dispositivos e sistemas recomendados:

| Hardware necessário | Link | Qtd. | Observações | Capítulos |
| :--- | :--- | :---: | :--- | :--- |
| Desktop ou notebook | - | 1 | Ubuntu 22.04 nativo, CUDA 12+, Python 3.12, Torch 2.6+; para treinar, GPU NVIDIA com 12GB+ de VRAM (p. ex. RTX 4080) e 16GB+ de RAM | Todos |
| reComputer Robotics J4012 (Jetson Orin) | [Bazaar](https://www.seeedstudio.com/reComputer-Robotics-J3011-with-GMSL-extension-board-p-6538.html) | 1 | JetPack 6.0 / 6.1 (JetPack 6.2 ainda sem suporte) | Fase 2, 3 |
| NVIDIA Jetson AGX Thor 128G | [Bazaar](https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html) | 1 | Para inferência GR00T N1.5 da Fase 4 | Fase 2, 3, 4 |

:::tip
Sem GPU de treinamento, ainda dá para concluir o curso: treine políticas pequenas em um notebook gratuito na nuvem (p. ex. Google Colab), ajuste o GR00T na NVIDIA Brev, ou use o treinamento em nuvem sem código do Capítulo 22 (SenseCraft Robotics).
:::

### Fase 2: Montagem do SO-ARM e controle básico

| Hardware necessário | Link | Qtd. | Observações |
| :--- | :--- | :---: | :--- |
| Kit SO-ARM101 (líder + seguidor) | [Kit SO-ARM101 Pro](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html)<br/>[Kit SO-ARM100](https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html) | 1 | - Versão kit: traz servos, placas, cabos; você imprime ou compra as peças<br/>- Versão pré-montada: pule a montagem do Capítulo 6<br/>- Atenção às regras de alimentação Standard (5V) vs. Pro (líder 5V / seguidor 12V) |

### Fase 3: Aprendizado por Imitação e LeRobot

| Hardware necessário | Link | Qtd. | Observações |
| :--- | :--- | :---: | :--- |
| Kit SO-ARM101 (líder + seguidor) | [Bazaar](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html) | 1 | O mesmo kit da Fase 2 |
| Câmera USB de 32 × 32 mm | - | 2 | A coleta de dados exige duas vistas (frontal + lateral, ou superior + garras); o kit traz uma, prepare a segunda |
| Tapete de mouse / de mesa | - | 1 | Protege e estabiliza a superfície; torna o posicionamento de objetos reprodutível |

### Fase 4: VLA — Isaac GR00T e SenseCraft sem código

| Hardware necessário | Link | Qtd. | Observações |
| :--- | :--- | :---: | :--- |
| Kit SO-ARM101 (líder + seguidor) | [Bazaar](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html) | 1 | O mesmo kit da Fase 2 |
| Câmera USB de 32 × 32 mm | - | 2 | As chaves de câmera devem permanecer iguais entre dataset e inferência |
| GPU de treinamento (ou nuvem) | - | 1 | O ajuste fino do GR00T precisa de ~25GB de VRAM (Ampere ou mais novo, p. ex. RTX 4090 / A6000); V100 sem suporte. Alternativas: nuvem NVIDIA Brev, ou a rota sem código do Capítulo 22 |
| NVIDIA Jetson AGX Thor (opcional, inferência na borda) | [Bazaar](https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html) | 1 | Executa o serviço de inferência GR00T N1.5 ajustado na borda |

### Melhorias opcionais

| Hardware necessário | Link | Qtd. | Observações |
| :--- | :--- | :---: | :--- |
| Câmera de profundidade Orbbec Gemini 2 | [Bazaar](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html) | 1 | Percepção RGB-D opcional para os capítulos de câmeras |
| Arquivos da garras macia | [soarm_soft_gripper](https://github.com/xiehuangbao888/soarm_soft_gripper.git) | - | Dedos de TPU para objetos macios, frágeis ou irregulares |

</section>

</div>
