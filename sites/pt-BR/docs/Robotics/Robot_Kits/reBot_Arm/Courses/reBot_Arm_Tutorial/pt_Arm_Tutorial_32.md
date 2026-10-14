---
description: "Capítulo 32 do Curso de Iniciação em IA Física da Seeed — o modelo do robô no ROS2: URDF e Xacro, links e juntas, os atributos visual / colisão / inercial, a árvore de transformadas TF, o robot_state_publisher, frames da câmera e do efetuador final, e como o modelo digital acompanha o braço real."
title: Capítulo 32 - URDF, TF e Modelos de Robô
hide_title: true
keywords:
  - reBot
  - Robotic Arm
  - ROS2
  - URDF
  - Xacro
  - TF
  - Transform Tree
  - robot_state_publisher
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_32
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/pt-br/rebot_physical_ai_course_chapter_32/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 7 · Capítulo 32 · Teoria</span>
    <h2>32. URDF, TF e Modelos de Robô</h2>
    <p>
      Capítulo 32 do Curso de Iniciação em IA Física da Seeed — o modelo do robô no ROS2: URDF e Xacro, links e juntas, os atributos visual / colisão / inercial, a árvore de transformadas TF, o robot_state_publisher, frames da câmera e do efetuador final, e como o modelo digital acompanha o braço real.
    </p>
    <div className="hero-actions">
      <a href="#overview">Visão geral do capítulo</a>
      <a href="#links">Links e juntas</a>
      <a href="#tf">A árvore de transformadas TF</a>
      <a href="#frames">Frames da câmera e do efetuador final</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 32.1 URDF e Xacro: O "DNA Digital" e a "Planta Avançada" do Robô

Assim como construir uma casa exige plantas de construção, no ROS2, para permitir que um computador controle um braço, primeiro você precisa dizer ao computador como é esse braço.

- **URDF (Unified Robot Description Format):**
    - **O que é:** Um arquivo de texto baseado em XML — a "planta de projeto de fábrica" do robô. Ele registra em detalhes quantas partes o robô tem, suas dimensões e como as juntas se conectam.
    - **Ponto fraco:** O URDF nativo é verboso e cheio de código duplicado. Por exemplo, para um carro com quatro rodas, você pode ter que copiar e colar o código da roda quatro vezes.
- **Xacro (linguagem de macros):**
    - **Evolução e recursos:** É a "planta atualizada" do URDF. Ela traz ideias de programação, suportando **variáveis**, **cálculo matemático** e **reutilização de código**.
    - **Exemplo:** Como construir com LEGO: você pode escrever um "módulo de roda" genérico em Xacro e então passar diferentes parâmetros de coordenadas para gerar as quatro rodas em uma única linha, simplificando muito o código do modelo.

> Então o que exatamente é desenhado nessa "planta digital"? O núcleo são os dois grandes componentes do robô: links e juntas.

<a id="links"></a>

## 32.2 Link e Joint: O Esqueleto do Robô

- **Link (link/osso):** As partes rígidas do robô, como o braço superior, antebraço e palma de uma pessoa.
- **Joint (junta/tendão):** A parte móvel que conecta dois Links, como o cotovelo e o pulso de uma pessoa. Ela determina como os ossos se movem uns em relação aos outros.

### Tipos comuns de juntas

- **Revolute (junta rotacional):** Como uma dobradiça, só pode girar dentro de um ângulo limitado (por exemplo, o cotovelo de um braço).
- **Continuous (junta de rotação contínua):** Pode girar 360 graus indefinidamente (por exemplo, a roda de um carro).
- **Prismatic (junta deslizante):** Só pode se deslocar ao longo de uma linha reta (por exemplo, uma porta de correr ou o trilho de uma impressora 3D).
- **Fixed (junta fixa):** Duas partes soldadas rigidamente, completamente imóveis (por exemplo, fixar uma câmera na extremidade do braço).

> Só o esqueleto não é suficiente. Para fazer o robô parecer real em ambientes de simulação física (como Mujoco), também precisamos dar a cada "osso (Link)" três atributos.

## 32.3 Visual, Collision e Inertial: Os Três Atributos de um Osso

No URDF, precisamos descrever três características de cada Link para o computador:

- **Visual (atributo de aparência — para humanos verem):**
    - **O que é:** A "pele e roupa" do robô, geralmente um modelo 3D detalhado (como arquivos `.dae` ou `.stl`). É apenas para aparência e determina como o robô é renderizado no computador.
- **Collision (atributo de colisão — para o computador calcular):**
    - **O que é:** A "hitbox" do robô. Para evitar que o cálculo do computador exploda, o modelo de colisão geralmente é muito mais simples do que o modelo visual (por exemplo, simplificar uma mão mecânica complexa em um cilindro ou caixa simples).
- **Inertial (atributo de inércia — para o motor de física):**
    - **O que é:** Contém informações físicas como massa e centro de massa.
    - **Importância:** Se você quiser fazer **compensação de gravidade para o braço** em um robô real, ou verificar na simulação se ele vai tombar, esse atributo precisa ser preenchido com extrema precisão; caso contrário, o movimento do robô parecerá sem peso ou simplesmente sairá voando.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-32/ch32-01.png" alt="URDF e Xacro, tipos de juntas e os atributos visual, de colisão e inercial" />
</div>

> Agora o modelo digital do robô está construído. Mas, à medida que ele se move, as posições relativas de suas juntas mudam a todo momento. Como o computador sabe onde está a "mão" do robô neste instante? Isso nos leva a um conceito extremamente importante no ROS2: a árvore de transformadas TF.

<a id="tf"></a>

## 32.4 Árvore de Transformadas TF: O "Proprioceptor" do Robô

- **O que é:** TF significa Transform. É um sistema em forma de árvore que registra dinamicamente a relação espacial (quão distante, quantos graus girado) de cada parte e sensor do robô em relação aos demais.
- **Exemplo:** Feche os olhos agora. Mesmo sem enxergar, você ainda consegue tocar o seu nariz com precisão. Isso acontece porque seu cérebro tem uma "árvore TF": onde o nariz está na cabeça, onde a cabeça está nos ombros, onde a mão está em relação aos ombros.
- **Característica:** Enquanto soubermos quantos graus cada junta girou no momento, o sistema TF pode, por meio de multiplicação de matrizes, seguir a cadeia e calcular a posição da extremidade do braço (mão) em relação à base.

> Então quem é que, silenciosamente, calcula e publica essa árvore TF nos bastidores?

## 32.5 Robot State Publisher (RSP): O Hub que Conecta Planta e Realidade

- **Papel:** É o "tradutor-chefe" no sistema do robô.
- **Como funciona:** Em uma mão ele segura a planta URDF estática que escrevemos; na outra ele recebe as informações de ângulo das juntas (Joint States) transmitidas em tempo real pelos motores. Ele combina os dois e, após cálculos matemáticos complexos, publica continuamente a árvore de transformadas TF mais recente para toda a rede ROS2. Com isso, o RViz (software de visualização) pode desenhar a pose em tempo real do robô.

<a id="frames"></a>

## 32.6 Frames da Câmera e do Efetuador Final: Por que Calculamos Coordenadas?

Em tarefas de preensão com braço robótico, geralmente precisamos lidar com dois frames de coordenadas extremamente críticos:

- **Frame do efetuador final:** O ponto central da garra do braço.
- **Frame da câmera:** O "olho" responsável por "ver" o alvo.

**Caso de uso real:** Suponha que a câmera veja uma maçã sobre a mesa e calcule que "a maçã está 30 cm diretamente à frente da câmera". No entanto, o cérebro do braço só sabe onde está a própria garra; ele não faz ideia de onde ficam esses 30 cm da câmera. É aqui que o **TF** entra em cena! Por meio da árvore TF, o sistema pode rapidamente converter "a posição da maçã no frame da câmera" em "a posição da maçã no frame da base do braço", guiando o braço para agarrar com precisão.

## 32.7 Modelo Digital e o Braço Real

URDF e Xacro desenham a planta do robô; Visual/Collision/Inertial dão a ele leis físicas reais; e TF e RSP permitem que esse corpo mantenha autoconsciência absoluta enquanto se move. Ao dominar esse conjunto de modelos, estabelecemos **uma correspondência perfeita entre o mundo digital do computador e o hardware físico real**, lançando uma base sólida para a integração de drivers do robô real (reBot Arm) e o planejamento de movimento no próximo capítulo.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-32/ch32-02.png" alt="A árvore de coordenadas TF, o robot_state_publisher e as transformadas entre frames" />
</div>

### Transição de Capítulo: Do "Fantasma Digital" ao "Corpo de Aço"

Se o Capítulo 31 construiu o "sistema nervoso" que transmite sinais para o robô**,** e o Capítulo 32 remodelou seu preciso "corpo físico" e "percepção espacial" no mundo digital, então agora toda a nossa preparação teórica está completa.

Mas o modelo no computador ainda é um "marionete" sem vida — ele não sabe quantos graus os motores reais giraram, nem consegue exercer qualquer força sobre o mundo físico real.

**É hora de quebrar a parede dimensional entre o digital e a realidade!**

No próximo Capítulo 33 [Prática]: Integração do reBot Arm com ROS2, vamos conectar um braço físico real (reBot Arm) à rede ROS2 que construímos. Vamos aplicar o Topic, Service e Action aprendidos no Capítulo 31, combinados com o modelo URDF construído no Capítulo 32, e ensinar você a escrever um "cérebro de driver" que encapsula comandos de hardware de baixo nível em interfaces padrão, permitindo que o modelo digital virtual e o corpo real de aço dancem em perfeita sincronia.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-32/ch32-03.png" alt="Transição de capítulo da rede ROS2 e modelo de robô para o braço real" />
</div>

</div>
