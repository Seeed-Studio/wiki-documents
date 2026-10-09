---
description: "Capítulo 23 do Curso para Iniciantes em IA Física da Seeed — referenciais de coordenadas e transformadas homogêneas: referenciais de mundo, base, junta, efetuador final e câmera, vetores e matrizes, matrizes de translação e rotação, encadeamento de transformadas e ângulos de Euler versus quaternions."
title: Capítulo 23 - Fundamentos Matemáticos do Braço Robótico e Sistemas de Coordenadas
hide_title: true
keywords:
  - reBot
  - Robotic Arm
  - Coordinate Frame
  - Homogeneous Transform
  - Euler Angles
  - Quaternion
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_23
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-25
  author: Seeed Studio Robotics Team
createdAt: '2026-09-25'
updatedAt: '2026-09-25'
url: https://wiki.seeedstudio.com/pt-br/rebot_physical_ai_course_chapter_23/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 5 · Capítulo 23 · Teoria</span>
    <h2>23. Fundamentos Matemáticos do Braço Robótico e Sistemas de Coordenadas</h2>
    <p>
      Capítulo 23 do Curso para Iniciantes em IA Física da Seeed — referenciais de coordenadas e transformadas homogêneas: referenciais de mundo, base, junta, efetuador final e câmera, vetores e matrizes, matrizes de translação e rotação, encadeamento de transformadas e ângulos de Euler versus quaternions.
    </p>
    <div className="hero-actions">
      <a href="#objectives">Objetivos de aprendizagem</a>
      <a href="#frames">Referenciais de coordenadas</a>
      <a href="#transforms">Transformadas homogêneas</a>
    </div>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Visão geral</span>
    <h2>Onde este estágio se encaixa no curso</h2>
  </div>

  O conteúdo apresentado nestes capítulos pertence ao **controle tradicional**, isto é, controlar o braço robótico por meio de programação fixa. O controle tradicional é usado na grande maioria dos projetos em produção. Sua vantagem é a estabilidade e a confiabilidade, o que é especialmente valioso em cenários de produção industrial. Sua desvantagem é que, em um novo ambiente, ele exige um novo ajuste antes de poder operar de forma estável.

  | Capítulo | Título | Tipo | Foco |
  | :--- | :--- | :--- | :--- |
  | **23** | Fundamentos Matemáticos do Braço Robótico e Sistemas de Coordenadas | Teoria | Referenciais, vetores, transformadas homogêneas, representações de rotação |
  | **24** | Cinemática Direta, Cinemática Inversa e Jacobiano | Teoria | Como os ângulos das juntas e a pose do efetuador final estão conectados |
  | **25** | Planejamento de Trajetória e Controle de Braço Robótico | Teoria | Caminho vs trajetória, interpolação, feedforward + feedback |
  | **26** | Pinocchio e MeshCat | Prática | Executar FK / IK / planejamento de trajetória no modelo real do reBot Arm |

  :::tip
  Os capítulos 23–25 são material de referência: em projetos reais o URDF e a biblioteca de cinemática fazem o
  trabalho de matrizes por você. Leia-os uma vez para entender *o que os números significam* e depois mantenha-os como
  referência de consulta enquanto você trabalha no Capítulo 26.
  :::

  **Por que o estágio 5 vem depois do estágio 4.** O estágio 3 e o estágio 4 ensinaram o braço a imitar e a seguir linguagem. Esses sistemas são aprendidos: eles veem o mundo e agem sobre ele, mas não *garantem* nada. No momento em que você precisa de um cordão de solda reto, uma pega repetível ou uma parada de emergência segura, você precisa da camada determinística por baixo — a matemática e o controle de movimento deste estágio.
  A figura acima é o contraste em uma imagem: um VLM descreve o mundo, um VLA age sobre ele, e tudo o que você aprende aqui decide *como* a ação é realmente executada.

  | Aspecto | VLM (Vision-Language Model) | VLA (Vision-Language-Action Model) |
  | :--- | :--- | :--- |
  | Entrada | Imagem + pergunta | Imagem + instrução de tarefa (+ estado do robô) |
  | Saída | Uma descrição em texto | Uma sequência de ações do robô |
  | Propósito | Entender e descrever | Entender e agir |
  | Modelos típicos | LLaVA, Qwen-VL | GR00T, pi0 |
  | Usado em | Percepção, anotação, depuração | Controle de robô real (Estágio 4) |
</section>

<a id="objectives"></a>

## 23.1 Objetivos de Aprendizagem

Após este capítulo você deverá ser capaz de:

1. Explicar o que é um referencial de coordenadas e por que um braço robótico precisa de vários deles.
2. Nomear o referencial de mundo, o referencial de base, o referencial do espaço de juntas, o referencial do efetuador final/ferramenta e o referencial da câmera, e dizer a que cada um está ligado.
3. Escrever uma translação e uma rotação como uma matriz de transformada homogênea 4x4 e multiplicar duas delas à mão.
4. Explicar por que coordenadas homogêneas existem e o que a notação "não homogênea" perde.
5. Dizer quando usar ângulos de Euler e quando usar quaternions.

## 23.2 Noções Básicas de Vetores e Matrizes

Cinemática direta e inversa (tratadas no próximo capítulo) envolvem um grande número de vetores e matrizes, então construir uma base sólida em matrizes é importante. No controle real não precisamos participar das computações de baixo nível nós mesmos, portanto este capítulo é fornecido apenas como referência.

- Um **vetor** descreve uma quantidade com direção e magnitude: uma posição, uma velocidade, uma força.
- Uma **matriz** descreve uma transformação linear: como um vetor em um referencial se torna um vetor em outro referencial.
- Os três objetos usados em toda a robótica são o **vetor posição 3x1** $\mathbf{p}$, a **matriz de rotação 3x3** $R$ e a **transformada homogênea 4x4** $T$.

Um teste de sanidade útil para qualquer matriz de rotação $R$:

$$
\begin{aligned}
R^\top R &= I && \text{(ortonormal)} \\
\det(R) &= +1 && \text{(uma rotação própria, sem espelhamento)}
\end{aligned}
$$

<details>
<summary><strong>Microexemplo resolvido: lendo uma transformada 4x4</strong></summary>

$$
T =
\begin{pmatrix}
0 & 0 & 1 & 0.30 \\
0 & 1 & 0 & 0.05 \\
-1 & 0 & 0 & 0.42 \\
0 & 0 & 0 & 1
\end{pmatrix},
\qquad
R =
\begin{pmatrix}
0 & 0 & 1 \\
0 & 1 & 0 \\
-1 & 0 & 0
\end{pmatrix},
\qquad
\mathbf{t} =
\begin{pmatrix}
0.30 \\ 0.05 \\ 0.42
\end{pmatrix}
$$

Leia as colunas de $R$ como os eixos do referencial filho expressos no referencial pai:

- x do filho = $[0,\ 0,\ -1]^\top$ -> aponta para baixo no referencial pai
- y do filho = $[0,\ 1,\ 0]^\top$ -> igual ao y do pai
- z do filho = $[1,\ 0,\ 0]^\top$ -> aponta ao longo do x do pai

e leia $\mathbf{t}$ como onde a origem do referencial filho está. Isso é tudo o que uma transformada é.

</details>

<a id="frames"></a>

## 23.3 Referencial de Mundo e Referencial de Base

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23/ch23-01.png" alt="World frame versus base frame" />
</div>

O referencial de mundo pode ser entendido como o sistema de coordenadas do ambiente em que o braço robótico está; o referencial de base é estabelecido na base do robô. No projeto do braço reBot, como a base do robô é fixa, o referencial de mundo e o referencial de base coincidem.

Por exemplo: o braço é colocado sobre uma mesa, com o centro da base do braço como origem, o tampo da mesa como plano xy e a direção vertical dos pés da mesa como eixo z; o referencial de mundo segue a regra da mão direita. O referencial de base também coincide com o referencial de mundo. (Referencial cartesiano comumente usado.)

<div className="image-frame">
  <img width={500} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23/ch23-02.png" alt="Right-hand rule, RGB = XYZ" />
</div>

**Convenção de cores dos três eixos XYZ em robótica/visão (RGB = XYZ)**

| Eixo | Cor | Nome comum |
| :--- | :--- | :--- |
| **X** | 🔴 Vermelho | Vermelho |
| **Y** | 🟢 Verde | Verde |
| **Z** | 🔵 Azul | Azul |

:::note
Regra da mão direita: aponte `+X` ao longo do dedo indicador e `+Y` ao longo do dedo médio; o polegar fornece `+Z`. Rotações em torno de `+X`, `+Y`, `+Z` são positivas no sentido anti-horário quando se olha de volta ao longo do eixo em direção à origem. Toda ferramenta de robótica (RViz, MeshCat, SolidWorks, URDF) usa essa mesma convenção, e é por isso que o mapeamento de cores RGB = XYZ vale a pena ser memorizado.
:::

## 23.4 Referencial do Espaço de Juntas e Referencial do Efetuador Final

O referencial do espaço de juntas é o referencial mais comumente usado no controle de robôs. Ele é estabelecido nas juntas do robô; o número de dimensões é igual ao número de juntas que o robô possui.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23/ch23-03.png" alt="Joint space frame" />
</div>

O reBot B601 tem seis juntas rotativas mais uma garra, então seu referencial de espaço de juntas é 6-dimensional (7-dimensional se a garra for tratada como um eixo extra).

**Referencial do efetuador final**

- Origem: ponto central da ferramenta (TCP)

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23/ch23-04.png" alt="End-effector / TCP frame" />
</div>

O referencial do efetuador final é estabelecido na extremidade do robô; também existe um referencial da ferramenta. Quando precisamos que a extremidade atinja uma certa posição, nos importamos com as coordenadas do efetuador final; se uma garra estiver montada na extremidade, nos importamos com as coordenadas da garra.

| Referencial | Ligado a | Origem | Uso típico |
| :--- | :--- | :--- | :--- |
| Mundo $\{world\}$ | O ambiente | Um ponto fixo na mesa / célula | Coordenadas em nível de tarefa, trabalho de câmera |
| Base $\{base\}$ | A base do robô | Centro da base | Raiz da cadeia cinemática |
| Junta $\{j_i\}$ | Junta $i$ | Eixo da junta $i$ | Cálculo interno de FK / IK |
| Flange | Saída da última junta | Centro da flange | Onde uma ferramenta é montada |
| Ferramenta / TCP | A própria ferramenta | Ponto central da ferramenta | Planejamento de trajetória, pontos de pega |

Em uma frase: o referencial de mundo é o referencial que os humanos entendem de forma mais intuitiva, enquanto o robô depende do referencial do espaço de juntas para mudar a posição da garra na extremidade. Então definimos alvos usando coordenadas de mundo e usamos o referencial do espaço de juntas para fazer o robô se mover como pretendemos. A conexão entre eles é a transformação de coordenadas.

## 23.5 Referencial da Câmera

O referencial da câmera e o referencial do efetuador final são geralmente obtidos por meio de uma transformada de translação.

- Origem: centro óptico da câmera
- Convenção: eixo z para frente ao longo do eixo óptico, x para a direita, y para baixo (convenção do OpenCV; algumas ferramentas OpenGL/ROS usam y para cima)

| Convenção | x | y | z | Mão direita |
| :--- | :--- | :--- | :--- | :--- |
| **OpenCV / visão** | direita | **baixo** | para frente (para dentro da cena) | sim |
| OpenGL / algumas ferramentas ROS | direita | cima | para trás | sim |
| ROS `camera_optical_frame` | direita | baixo | para frente | sim |

:::warning
Nunca misture silenciosamente as duas convenções. Uma câmera com "y para baixo" e uma câmera com "y para cima" diferem por uma rotação de 180° em torno de x, e uma calibração mão-olho calculada com uma convenção fará a garra ir para o lado errado do objeto quando usada com a outra.
:::

Onde o referencial da câmera aparece em um pipeline de pega visual:

$$
\begin{aligned}
\text{pixel } (u, v) &\ \xrightarrow{\ \text{intrinsics } K\ } \text{camera frame} \\
&\ \xrightarrow{\ \text{mão-olho } T_{\text{cam}\to\text{tcp}}\ } \text{referencial do efetuador final} \\
&\ \xrightarrow{\ \text{FK}\ } \text{referencial da base} \\
&\ \xrightarrow{\ \text{IK}\ } \text{ângulos das juntas}
\end{aligned}
$$

<a id="transforms"></a>

## 23.6 Representação matricial de transformações de coordenadas

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23/ch23.jpg" alt="Rotações elementares de referencial i, j, k" />
</div>

A representação **homogênea** unifica "transformação linear + translação" em uma única multiplicação de matrizes.

Na representação **não homogênea**, a translação é uma adição fora da matriz e não pode ser combinada com a rotação em uma única matriz.

**Transformação homogênea geral**

$$
T =
\begin{pmatrix}
R & \mathbf{t} \\
\mathbf{0}^\top & 1
\end{pmatrix},
\qquad
R:\ 3\times3 \text{ rotação (orientação)},
\qquad
\mathbf{t}:\ 3\times1 \text{ translação (posição)}
$$

**Transformação de translação**

$$
\mathbf{p}' = \mathbf{p} + \mathbf{t}
\qquad
\mathbf{T} =
\begin{pmatrix}
1 & 0 & 0 & t_x \\
0 & 1 & 0 & t_y \\
0 & 0 & 1 & t_z \\
0 & 0 & 0 & 1
\end{pmatrix}
$$

Escrita por completo, não homogênea à esquerda e homogênea à direita:

$$
\begin{pmatrix}
x' \\ y' \\ z'
\end{pmatrix}
=
\begin{pmatrix}
x \\ y \\ z
\end{pmatrix}
+
\begin{pmatrix}
t_x \\ t_y \\ t_z
\end{pmatrix}
=
\begin{pmatrix}
x + t_x \\ y + t_y \\ z + t_z
\end{pmatrix}
\qquad\Longleftrightarrow\qquad
\begin{pmatrix}
x' \\ y' \\ z' \\ 1
\end{pmatrix}
=
\begin{pmatrix}
1 & 0 & 0 & t_x \\
0 & 1 & 0 & t_y \\
0 & 0 & 1 & t_z \\
0 & 0 & 0 & 1
\end{pmatrix}
\begin{pmatrix}
x \\ y \\ z \\ 1
\end{pmatrix}
=
\begin{pmatrix]
x + t_x \\ y + t_y \\ z + t_z \\ 1
\end{pmatrix}
$$

**Transformação de rotação**

As três matrizes de rotação elementares. Escrever $c = \cos\theta$ e $s = \sin\theta$ mantém as matrizes legíveis; expanda-as substituindo de volta quando fizer os cálculos à mão.

$$
R_x(\theta) =
\begin{pmatrix}
1 & 0 & 0 \\
0 & c & -s \\
0 & s &  c
\end{pmatrix}
\qquad
R_y(\theta) =
\begin{pmatrix}
 c & 0 & s \\
 0 & 1 & 0 \\
-s & 0 & c
\end{pmatrix}
\qquad
R_z(\theta) =
\begin{pmatrix}
c & -s & 0 \\
s &  c & 0 \\
0 &  0 & 1
\end{pmatrix}
$$

A versão homogênea de cada rotação mantém o mesmo bloco 3x3 com uma coluna de translação zero, então uma matriz de rotação $R$ se torna

$$
\begin{pmatrix}
R & \mathbf{0} \\
\mathbf{0}^\top & 1
\end{pmatrix}
\qquad\text{por exemplo}\qquad
R_z(\theta) =
\begin{pmatrix}
c & -s & 0 & 0 \\
s &  c & 0 & 0 \\
0 &  0 & 1 & 0 \\
0 &  0 & 0 & 1
\end{pmatrix}
$$

| Eixo | Não homogênea | Homogênea |
| :--- | :--- | :--- |
| Eixo X | $R_x(\theta)$ | $\begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & c & -s & 0 \\ 0 & s & c & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$ |
| Eixo Y | $R_y(\theta)$ | $\begin{pmatrix} c & 0 & s & 0 \\ 0 & 1 & 0 & 0 \\ -s & 0 & c & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$ |
| Eixo Z | $R_z(\theta)$ | $\begin{pmatrix} c & -s & 0 & 0 \\ s & c & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$ |

:::note
**Por que a linha inferior é $[0\ 0\ 0\ 1]$.** Ela não carrega nenhum significado físico; existe para que o produto de matrizes de duas transformações seja novamente uma transformação, e para que um *ponto* $(x, y, z, 1)$ e uma *direção* $(x, y, z, 0)$ possam ser transformados pela mesma matriz — a direção ignora a translação, o ponto não.
:::

**Compondo transformações** — encadear é apenas multiplicação de matrizes, e a inversa é barata:

$$
\begin{aligned}
T_a^c &= T_a^b \, T_b^c && \text{composição (regra da cadeia)} \\
\left( T_a^b \right)^{-1} = T_b^a &=
\begin{pmatrix}
R^\top & -R^\top \mathbf{t} \\
\mathbf{0}^\top & 1
\end{pmatrix}
&& (R^\top \text{ em vez de uma inversão } 3\times3)
\end{aligned}
$$

## 23.7 Ângulos de Euler e quaternions

<div className="image-frame">
  <img width={400} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23/ch23-06.png" alt="Rolagem, arfagem, guinada" />
</div>

**Ângulos de Euler vs. quaternions**

- Ângulos de Euler: 3 números, intuitivos, têm travamento de cardan (gimbal lock)
- Quaternions: 4 números (1 restrição), não intuitivos, sem travamento de cardan

| Aspecto | Ângulos de Euler (roll/pitch/yaw) | Quaternion |
| :--- | :--- | :--- |
| Números | 3 | 4, com a restrição $w^2+x^2+y^2+z^2 = 1$ |
| Intuitivo | Sim, fácil de ler e registrar | Não |
| Singularidade | Travamento de cardan quando o ângulo do meio atinge +/-90 graus | Nenhuma |
| Interpolação | Ruim (saltos, multivalorado) | Boa (slerp) |
| Risco de convenção | 24 convenções diferentes (ordem, intrínseco/extrínseco) | Única convenção (apenas ambiguidade de sinal) |
| Uso típico | Entrada humana, arquivos de configuração, logs | Cálculo interno, mensagens ROS, estimação de estado |

Em engenharia: **use ângulos de Euler para humanos, quaternions para a máquina**.

:::tip
No reBot Arm isso aparece de forma concreta: MeshCat e Pinocchio pensam em matrizes de rotação e objetos SE(3), enquanto você digita roll/pitch/yaw em graus no terminal. As demonstrações no Capítulo 26 convertem entre os dois para você (`rpyToMatrix`, `matrixToRpy`).
:::

- Um **referencial** são três eixos mais uma origem; o braço precisa de pelo menos referenciais de mundo, base, junta, ferramenta e câmera.
- $\{world\} = \{base\}$ no reBot Arm porque a base é fixada.
- Uma **transformação homogênea** empacota rotação e translação em uma única matriz 4x4; encadear é multiplicar.
- **Ângulos de Euler** para humanos, **quaternions** para a máquina.
- Próximo capítulo: usar essas transformações para calcular a pose do efetuador final a partir dos ângulos das juntas — e de volta novamente.

</div>
