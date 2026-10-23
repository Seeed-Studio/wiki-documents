---
description: "Prepare-se para a reprodução prática: checklists de hardware do computador e do reBot Arm, instalação do ambiente LeRobot, configuração de câmera e CAN, e prática de teleoperação líder–seguidor."
title: "Configuração de Hardware e Software"
hide_title: true
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - SO101
  - LeRobot
  - Teleoperation
  - Paper Deep-Dive
  - Robotic Arm
  - Physical AI
  - Course
  - Tutorial
  - SO-ARM101
  - Hugging Face
  - Arm
  - Robotics
  - Hands-on Deployment
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/paper_reading_hardware_and_teleoperation
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-16'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/pt-br/robotics/paper_reading_hardware_and_teleoperation/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page hands-on-reproduction-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-hardware-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · IMPLANTAÇÃO PRÁTICA</span>
  <h1 id="paper-reading-hardware-title">Configuração de Hardware &amp; Software</h1>
  <p className="paper-reading-lead">Prepare o hardware e o software, estabeleça a teleoperação líder–seguidor e fique pronto para coleta de dados, treinamento de modelos e reprodução do artigo.</p>
  <ul className="paper-reading-badges" aria-label="In this guide">
    <li>Checklist de hardware</li>
    <li>Configuração de ambiente</li>
    <li>Configuração líder–seguidor</li>
    <li>Prática de teleoperação</li>
  </ul>
</section>

## Configuração de Hardware

### Computador: escolha uma plataforma

Escolha uma das seguintes plataformas de computação com base nos equipamentos disponíveis para você.

| Hardware necessário | Link | Quantidade | Observações |
| --- | --- | :---: | --- |
| Desktop ou laptop | Forneça o seu próprio | 1 | Ubuntu 22.04 nativo; GPU RTX 4080 ou superior com pelo menos 12 GB de VRAM; pelo menos 16 GB de memória do sistema. |
| NVIDIA Jetson AGX Thor 128G | <a className="paper-reading-product-link" href="https://www.seeedstudio.com/NVIDIAr-Jetson-AGX-Thortm-Developer-Kit-Bundle.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/i/m/image__5.png" alt="NVIDIA Jetson AGX Thor Developer Kit Bundle" loading="lazy" width="128" height="104" /><span>NVIDIA Jetson AGX Thor Developer Kit Bundle</span></a> | 1 | Uma alternativa à opção desktop/laptop. |

### Hardware do reBot Arm

| Hardware necessário | Link | Quantidade | Observações |
| --- | --- | :---: | --- |
| reBot Arm B601 DM / RS | <a className="paper-reading-product-link" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/i/m/img_v3_0210p_aea42523-221d-4fb4-8730-9cb074a081ag_2.jpg" alt="reBot Arm B601-DM Assembled Bundle" loading="lazy" width="128" height="104" /><span>B601-DM assembled bundle</span></a><br /><a className="paper-reading-product-link" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/e/2/e26062401-gallery-2.jpg" alt="reBot Arm B601-RS Assembled Bundle" loading="lazy" width="128" height="104" /><span>B601-RS assembled bundle</span></a> | 1 | Escolha DM ou RS como o braço seguidor. Selecione o adaptador de energia e as presilhas de mesa correspondentes nas opções do kit. |
| reBot Arm 102 leader arm | <a className="paper-reading-product-link" href="https://www.seeedstudio.com/Star-Arm-102-p-6765.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/7/-/7-100004723-star-arm-102.jpg" alt="Star Arm 102 for reBot B601-DM&amp;RS Leader Arm" loading="lazy" width="128" height="104" /><span>Star Arm 102 leader arm</span></a><br /><a className="paper-reading-product-link" href="https://www.seeedstudio.com/AC-DC-Power-Adapter-DC5521-Male-12V-2A-1500mm-p-6839.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-313000002-ac-dc-power-adapter.jpg" alt="AC/DC Power Adapter 12V 2A 5-in-1" loading="lazy" width="128" height="104" /><span>Adaptador de energia 12 V / 2 A</span></a> | 1 | Usado para teleoperação líder–seguidor. O braço e o adaptador de energia são listagens separadas. |
| RGB USB Camera-100°-720P (vista do punho) | <a className="paper-reading-product-link" href="https://www.seeedstudio.com/Camera-Module-OV9732-1MP-100-USB2-0-USB2-0-L38-W38-H16-05mm-p-6982.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100079619-gallery_img_1_1.png" alt="RGB USB Camera-100°-720P" loading="lazy" width="128" height="104" /><span>RGB USB Camera-100°-720P</span></a> | 1 | Monte no punho do robô. |
| RGB USB Camera-100°-720P (vista fixa) | <a className="paper-reading-product-link" href="https://www.seeedstudio.com/Camera-Module-OV9732-1MP-100-USB2-0-USB2-0-L38-W38-H16-05mm-p-6982.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100079619-gallery_img_1_1.png" alt="RGB USB Camera-100°-720P" loading="lazy" width="128" height="104" /><span>RGB USB Camera-100°-720P</span></a> | 1 | Fornece uma visão externa fixa. Usa o mesmo modelo de câmera da vista do punho. |
| Suporte para câmera de punho | [Mount model and instructions](https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/camera-mounts/README.md) | 1 | Imprima você mesmo; se você não tiver uma impressora, pergunte ao suporte ao cliente sobre a disponibilidade de um suporte cortesia. |
| Suporte para câmera em terceira pessoa | <a className="paper-reading-product-link" href="https://www.seeedstudio.com/Robot-Arm-Camera-Mount-for-LeRobot-SO-10%26reBot-B601-p-7003.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/0/100006505-gallery_img_1.jpg" alt="Robot Arm Camera Mount for LeRobot SO-101 &amp; reBot B601" loading="lazy" width="128" height="104" /><span>Robot Arm Camera Mount for LeRobot SO-101 &amp; reBot B601</span></a> | 1 | Fixa a posição e o ângulo da câmera externa. |

<div className="paper-reading-callout">

**Compra e montagem**

- Para reduzir o custo de compra, você pode escolher um kit e seguir as instruções detalhadas de montagem da Seeed: [montagem DM](/pt-br/rebot_b601_dm_getting_started/#step-1-assembly-guide) ou [montagem RS](/pt-br/rebot_b601_rs_getting_started/#assembly-guide).
- As fontes de alimentação enviadas pela Seeed usam materiais retardantes de chama, o que aumenta seu custo. Como alternativa, compre uma fonte de alimentação original Mean Well e configure-a para atender aos requisitos do braço escolhido.

</div>

### Sandbox de Experimentos da Seeed (Opcional)

O sandbox de experimentos é opcional. Você também pode aprender e reproduzir experimentos usando conjuntos de dados compartilhados e modelos treinados por outros usuários.

<figure className="paper-reading-figure">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/platform_preparation/seeed-sandbox.jpg" alt="Seeed experiment sandbox with a reBot Arm" loading="lazy" />
  <figcaption>Sandbox de experimentos da Seeed (opcional)</figcaption>
</figure>

---

## Ambiente de Software

### Instalar o LeRobot

Use **Ubuntu 22.04 nativo**, em vez de máquina virtual ou WSL. Siga o guia de instalação para o modelo do seu braço.

| Modelo de braço | Guia de instalação |
| --- | --- |
| SO-ARM 101 | [Instalar LeRobot para SO-ARM 101](/pt-br/lerobot_so100m_new/#install-lerobot) |
| reBot Arm DM | [Instalar LeRobot para reBot-DM](/pt-br/rebot_arm_b601_dm_lerobot/#install-lerobot) |
| reBot Arm RS | [Instalar LeRobot para reBot-RS](/pt-br/rebot_arm_b601_rs_lerobot/#install-lerobot) |

### Configurar Câmeras e CAN

Configure a comunicação e as câmeras para o seu braço. O SO-ARM 101 usa uma conexão serial; os reBot DM / RS usam CAN, conforme descrito em seus respectivos guias.

| Modelo de braço | Configuração de comunicação | Configuração de câmera |
| --- | --- | --- |
| SO-ARM 101 | [Conexão serial, calibração e teleoperação](/pt-br/lerobot_so100m_new/#teleoperation) | [Adicionar câmeras](/pt-br/lerobot_so100m_new/#add-cameras) |
| reBot Arm DM | [Configuração de software e fluxo de trabalho de calibração](/pt-br/rebot_b601_dm_getting_started/#software-setup-and-calibration-workflow) | [Adicionar câmeras](/pt-br/rebot_arm_b601_dm_lerobot/#add-cameras) |
| reBot Arm RS | [Configuração de software e fluxo de trabalho de calibração](/pt-br/rebot_b601_rs_getting_started/#software-setup-and-calibration-workflow) | [Adicionar câmeras](/pt-br/rebot_arm_b601_rs_lerobot/#add-cameras) |

---

## Configuração Líder–Seguidor

### Seguidor e Líder

- **Líder**: operado por uma pessoa; suas posições de junta fornecem a entrada de teleoperação.
- **Seguidor**: recebe comandos de controle mapeados e segue o movimento do líder.

Calibre ambos os braços antes de iniciar a teleoperação. Verifique direções das juntas, faixas de movimento e abertura e fechamento do gripper.

Recursos relacionados: [Follower and Leader (documento original no Feishu)](https://seeedstudio.feishu.cn/sync/CLA2dJJTcss5xPbBjwicny8nn8g) · [Guia na wiki para calibração e teleoperação líder–seguidor](/pt-br/robotics/rebot_physical_ai_course_chapter_11/).

### Frequência de Controle e Latência

Quão de perto o seguidor acompanha sua mão depende de duas coisas: quantas vezes o loop de encaminhamento roda por segundo (**frequência**) e o atraso entre o seu movimento e a resposta do braço (**latência**).

#### De onde vem a latência e por que ela é inevitável?

Ler as posições das juntas do líder, mapeá-las, enviar comandos CAN, executar os movimentos do seguidor e ler de volta seu estado — tudo isso leva tempo. A figura abaixo mostra as fontes de atraso ao longo dessa cadeia.

<figure className="paper-reading-figure">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/platform_preparation/teleoperation-latency.png" alt="reBot leader–follower teleoperation pipeline and its sources of latency" loading="lazy" />
  <figcaption>Fontes de latência na teleoperação líder–seguidor</figcaption>
</figure>

#### O que é a frequência de controle? Ela pode ser alterada?

Esta seção usa a configuração de teleoperação de **60 Hz** do guia do reBot: 60 ciclos por segundo de “ler líder → mapear → enviar CAN → ler de volta”, com um orçamento de tempo de cerca de **16,7 ms** por ciclo. Ajuste isso usando o parâmetro `fps` na configuração de teleoperação.

- **O loop de hardware determina o limite superior.** Um ciclo neste hardware já leva mais de dez milissegundos; o limite prático é aproximadamente 60–100 Hz. Definir um valor mais alto pode não aumentar a taxa real e pode causar avisos de estouro de ciclo. Meça os resultados no seu próprio hardware e configuração.
- **60 Hz é suficiente para os exercícios manuais aqui.** Para agarrar, transportar e posicionar, amostragem e execução consistentes importam mais do que simplesmente aumentar a taxa.

---

## Prática Hands-on: Agarrar, Transportar e Posicionar

A teleoperação estável permite que o braço se mova, mas executar uma tarefa de forma confiável exige prática deliberada. A qualidade das demonstrações posteriores depende da sua habilidade de operação. Siga os dois níveis a seguir.

### Exercício 1: Mova Objetos Leves e Pegue o Jeito dos Controles

Coloque alguns blocos leves na área de trabalho e pratique:

**Mover acima do alvo → Abaixar → Fechar a garra → Erguer**

**Objetivo**: completar 10 tentativas consecutivas sem colisões ou queda de objetos. Execute cada sequência de forma suave, sem hesitação.

### Exercício 2: Concluir a Tarefa de Transporte e Posicionamento

Execute toda a sequência:

**Agarrar → Transportar → Posicionar no recipiente designado**

**Objetivo**: completar 10 tentativas consecutivas mantendo as poses iniciais e finais amplamente consistentes.

</div>
