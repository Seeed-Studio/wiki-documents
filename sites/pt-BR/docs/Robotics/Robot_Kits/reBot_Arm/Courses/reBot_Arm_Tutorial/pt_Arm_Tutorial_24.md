---
description: "Capítulo 24 do Curso para Iniciantes em IA Física da Seeed — espaço de juntas versus espaço cartesiano, cinemática direta a partir de parâmetros DH e URDF, cinemática inversa e suas múltiplas ou inexistentes soluções, o Jacobiano e a cinemática de velocidade, singularidades e mínimos quadrados amortecidos, e CI analítica versus numérica."
title: Capítulo 24 - Cinemática Direta, Cinemática Inversa e o Jacobiano
keywords:
  - reBot
  - Robotic Arm
  - Forward Kinematics
  - Inverse Kinematics
  - Jacobian
  - Singularity
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_24
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-25
  author: Seeed Studio Robotics Team
createdAt: '2026-09-25'
updatedAt: '2026-09-25'
url: https://wiki.seeedstudio.com/pt-br/rebot_physical_ai_course_chapter_24/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 5 · Capítulo 24 · Teoria</span>
    <h2>24. Cinemática Direta, Cinemática Inversa e o Jacobiano</h2>
    <p>
      Capítulo 24 do Curso para Iniciantes em IA Física da Seeed — espaço de juntas versus espaço cartesiano, cinemática direta a partir de parâmetros DH e URDF, cinemática inversa e suas múltiplas ou inexistentes soluções, o Jacobiano e a cinemática de velocidade, singularidades e mínimos quadrados amortecidos, e CI analítica versus numérica.
    </p>
    <div className="hero-actions">
      <a href="#espaço-de-juntas-cartesiano">Juntas vs cartesiano</a>
      <a href="#cinemática-direta">Cinemática direta</a>
      <a href="#cinemática-inversa">Cinemática inversa</a>
      <a href="#jacobiano">Jacobiano</a>
    </div>
  </div>
</section>

## 24.1 Tópicos principais

- Espaço de juntas vs. espaço cartesiano
- Cinemática direta (FK)
- Cinemática inversa (IK)
- Múltiplas soluções, nenhuma solução e espaço de trabalho
- Limites de junta
- Matriz Jacobiana
- Cinemática de velocidade
- Singularidades
- CI numérica e CI em malha fechada

## 24.2 Objetivos de aprendizagem

Explicar como o braço calcula a pose do efetuador final a partir dos ângulos das juntas e como resolver os ângulos das juntas dado uma pose alvo.

<a id="espaço-de-juntas-cartesiano"></a>

## 24.3 Espaço de Juntas vs. Espaço Cartesiano

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-24/ch24-01.png" alt="Espaço de juntas versus espaço cartesiano" />
</div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-24/ch24-02.png" alt="Espaço de juntas versus espaço cartesiano, visão geral completa" />
</div>

||Espaço de juntas|Espaço cartesiano|
|:---|:---|:---|
|Descrição|Ângulos de junta $(q_1, q_2, \ldots, q_n)$|Pose do efetuador final $(x, y, z, rx, ry, rz)$|
|Dimensão|n (número de juntas)|6 (3 de posição + 3 de orientação)|
|Significado físico|Como os motores giram|Onde está a extremidade e para que lado aponta|
|Caminho do movimento|Velocidade de junta constante -> curva irregular do efetuador final|Caminho retilíneo/arco da extremidade -> movimento de junta não linear|
|Dificuldade de controle|Direto (enviar para os motores)|Indireto (é preciso resolver a CI para os ângulos de junta antes, depois enviar aos motores)|
|Usos típicos|Movimento livre, desvio de obstáculos, homing|Apreensão, soldagem, pintura, seguimento de trajetória|

**Exemplo 1: robô que escreve**

|Tarefa|Qual espaço|
|:---|:---|
|Girar o motor 1 em 30°, o motor 2 em 45°|Espaço de juntas (enviar ângulos diretamente)|
|Fazer a ponta da caneta traçar os traços de um caractere em linhas retas|Espaço cartesiano (calcular ângulos de junta para cada ponto)|

**Exemplo 2: pegar um copo (ignorando o caminho)**

|Etapa|Qual espaço|
|:---|:---|
|Mover da posição inicial até perto do copo|Espaço de juntas (simples, velocidade constante, seguro)|
|Últimos poucos centímetros para alinhar precisamente com a borda do copo|Espaço cartesiano (precisa se aproximar em XYZ)|
|Erguer e colocar na prateleira|Espaço de juntas (sem exigência de linha reta)|

**Exemplo 3: soldar um carro**

|Tarefa|Qual espaço|
|:---|:---|
|Tocha de solda segue a junta em linha reta|Espaço cartesiano (linha reta = junta de solda)|
|Erguer a tocha e mover para o próximo ponto|Espaço de juntas (o que importa é ser rápido)|

## 24.4 Cinemática Direta vs. Cinemática Inversa

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-24/ch24-03.png" alt="FK versus IK" />
</div>

||Cinemática direta (FK)|Cinemática inversa (IK)|
|:---|:---|:---|
|Conhecido|Ângulos de junta|Pose do efetuador final|
|Resolver para|Pose do efetuador final|Ângulos de junta|
|Direção|Juntas -> efetuador final|Efetuador final -> juntas|
|Solução|Única|Múltiplas / nenhuma|
|Cálculo|Simples (aplicar fórmulas diretamente)|Complexo (resolver equações / iterar)|

**Para que serve a FK**

- Visualização: renderizar ângulos de junta em tempo real como um modelo 3D (ROS RViz, personagens de jogos)
- Verificação: checar se a pose do efetuador final calculada está correta
- Calibração: comparar a pose teórica com a pose real
- Controle simples: mover ao longo de uma sequência de ângulos pré-definida

**Para que serve a IK**

- Apreensão: câmera vê o objeto -> resolve ângulos de junta -> controla o braço
- Soldagem/pintura: a extremidade deve seguir uma trajetória especificada
- Humanoide: os pés devem pousar em pontos específicos no chão
- Qualquer cenário de "ir até um lugar"

<a id="cinemática-direta"></a>

## 24.5 Cinemática Direta

**O processo de calcular a pose do efetuador final a partir dos ângulos das juntas**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-24/ch24-04.png" alt="Cinemática direta" />
</div>

**Versão em uma frase**

**Multiplicar** a transformação local de cada junta **em sequência**, da base até o efetuador final.

$$
T_{base}^{end} = T_{base}^{link_1} \cdot T_{link_1}^{link_2} \cdots T_{link_{n-1}}^{link_n} \cdot T_{link_n}^{tcp}
$$

**Etapas de cálculo (6 passos)**

1. **Estabelecer referenciais dos elos**: construir um referencial local em cada junta (parâmetros DH / URDF)
2. **Escrever a matriz de transformação de cada elo** $T_i^{i+1}$ (translação + rotação em relação à junta anterior)
3. **Substituir os ângulos de junta** $q_i$ (rotação usa $\theta_i$, translação vem da tabela DH)
4. **Multiplicar em sequência** $T_1^2 \cdot T_2^3 \cdot \ldots \cdot T_n^{n+1}$
5. **Multiplicar pelo deslocamento da ferramenta** $T_{flange}^{tcp}$
6. **Obter** $T_{base}^{end}$ — contendo posição $(x,y,z)$ e orientação ($R$ ou $q$ ou ângulos de Euler)

**Conceitos relacionados em um diagrama**

```Plain Text
Joint angles (q)
   |
DH params / URDF  ← describe link geometry (a, alpha, d, theta)
   |
Homogeneous transform (4x4)  ← translation + rotation combined
   |
   +-- rotation matrix R (3x3, SO(3))
   |      +-- rotation representation: Euler / quaternion / axis-angle
   +-- translation vector t (3x1)
   |
Matrix chain multiplication (chain rule)
   |
End-effector pose T_base^end (SE(3))
   |
   +-- position (x, y, z)  ← FK output
   +-- orientation (R / q / rpy)  ← orientation representation
   |
Cartesian-space trajectory / Jacobian (velocity mapping)
   |
Visualization (RViz / simulation)
```

**Lista de verificação de conceitos centrais**

|Conceito|Função|
|:---|:---|
|**Parâmetros DH**|Codificar os $a, \alpha, d, \theta$ de cada elo como 4 números|
|**Transformação homogênea**|Agrupar translação + rotação em uma matriz 4x4 para facilitar o encadeamento|
|**Regra da cadeia**|A essência de multiplicar muitas matrizes|
|**Representação de rotação**|Fornecer a orientação como: ângulos de Euler / quaternions / matriz de rotação|
|**Trigonometria**|A expansão das matrizes é toda em $\sin/\cos$|
|**Jacobiano**|A FK fornece a pose; J fornece a velocidade (usado ao contrário pela IK)|
|**URDF**|O arquivo real de descrição do robô; fonte dos números da FK|

**Um pequeno exemplo (2 juntas)**

$$
\theta_1, \theta_2 = \text{ângulos de junta}, \qquad l_1, l_2 = \text{comprimentos dos elos}
$$

$$
T_1^2 =
\begin{pmatrix}
\cos\theta_1 & -\sin\theta_1 & 0 & l_1\cos\theta_1 \\
\sin\theta_1 &  \cos\theta_1 & 0 & l_1\sin\theta_1 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
\qquad
T_2^3 =
\begin{pmatrix}
\cos\theta_2 & -\sin\theta_2 & 0 & l_2\cos\theta_2 \\
\sin\theta_2 &  \cos\theta_2 & 0 & l_2\sin\theta_2 \\
\vdots & \vdots & \vdots & \vdots \\
0 & 0 & 0 & 1
\end{pmatrix}
$$

$$
T_1^3 = T_1^2 \, T_2^3 \quad\Longrightarrow\quad \text{pose do efetuador final}
$$

FK = **descrição DH + matrizes homogêneas + multiplicação em cadeia**, traduzindo "ângulos de junta" em "onde está a extremidade".

É essencial saber ao longo do caminho: DH, transformações 4x4, multiplicação de matrizes, representações de rotação (Euler/quaternion), URDF.

<a id="cinemática-inversa"></a>

## 24.6 Cinemática Inversa

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-24/ch24-05.png" alt="CI analítica versus CI numérica" />
</div>

**O processo de calcular ângulos de junta a partir da pose do efetuador final.** Na prática, quase sempre é feito de forma **numérica**: em vez de resolver a equação da pose em um único passo, o solucionador se aproxima do alvo gradualmente.

Pense em alcançar um livro em uma prateleira: você observa o quão longe sua mão ainda está do livro, decide em que direção se mover, ajusta um pouco suas juntas e repete até tocá-lo. Um robô faz exatamente a mesma coisa.

**O laço** — cada iteração faz três coisas:

1. **Observar o erro**: quão longe o efetuador final ainda está da pose alvo
2. **Inferir a direção**: como cada junta deve se mover para reduzir esse erro
3. **Dar um passo**: mover as juntas uma vez, depois voltar ao passo 1

Repetir até que o erro seja pequeno o suficiente.

**Por que é tão amplamente usada**

- **Universal**: o mesmo laço funciona para 6 eixos, 7 eixos, mãos e braços tipo cobra
- **Sem fórmulas para derivar**: é um programa, não uma página de álgebra
- **Precisão ajustável**: quer mais exatidão? Rode mais iterações

Na indústria, o laço é fechado em torno das posições medidas das juntas, então o controlador continua observando o erro e corrigindo mesmo quando o modelo está um pouco errado. Essa versão de "olhar enquanto se move" é a **CLIK (Closed-Loop IK)**, o padrão de fato em braços industriais.

**Em uma frase:** CI numérica = **observar o erro e se aproximar do alvo pouco a pouco** — universal, eficaz e estável.


<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-24/ch24-06.png" alt="CI analítica versus CI numérica" />
</div>

<a id="jacobiano"></a>

## 24.7 Matriz Jacobiana

**O Jacobiano transforma "resolver a pose" em "resolver a velocidade".**

A equação de pose é não linear e geralmente não tem solução em forma fechada:

$$
f(q) = T_{target}
$$

Ao diferenciá-la no $q$ atual obtemos o Jacobiano e, em primeira ordem, o problema se torna linear:

$$
J(q) = \frac{\partial f}{\partial q}, \qquad v_{end} = J(q)\,\dot{q}, \qquad \Delta T \approx J(q)\,\Delta q, \qquad \dot{q} = J^{-1} v_{end}
$$

**O laço iterativo**

1. $q$ atual -> calcular a pose do efetuador final $T$
2. Erro: $\Delta T = T_{target} - T$
3. Velocidade do efetuador final: $v = \Delta T / dt$
4. Velocidade das juntas: $\dot{q} = J^{-1} v$
5. Atualização: $q_{new} = q + \dot{q}\,dt$
6. Volte ao passo 1, até que $\Delta T$ seja pequeno o suficiente

**Em uma frase:** o Jacobiano "achata localmente" a equação de IK não linear em uma equação linear; resolver para a velocidade e integrá-la converge para a pose alvo.

## 24.8 Singularidades

Em uma **singularidade** o braço perde a capacidade de mover o efetuador final em uma ou mais direções — não importa como as juntas se movam, a extremidade não consegue se mover daquela forma.

- **Braço totalmente estendido**: ele não consegue alcançar mais longe; a direção para fora é perdida
- **Duas juntas do punho colineares**: dois eixos de rotação coincidem, então um grau de liberdade desaparece

**O que acontece em uma singularidade**

|Situação|Sintoma|
|:---|:---|
|Jacobiano "falha"|O mapeamento de juntas para extremidade não pode mais ser invertido|
|Solução de IK explode|A velocidade de junta calculada vai para o infinito|
|Tremores nas juntas|Os motores vibram violentamente|
|Oscilação de controle|A extremidade salta para frente e para trás|

Essência: algumas entradas desse mapeamento se tornam $0/0$ — indefinidas, não apenas grandes.

**Como detectá-la** — quando o Jacobiano degenera, um número vai a zero:

$$
\det J = 0, \qquad \sigma_{\min}(J) = 0, \qquad \operatorname{rank} J < n
$$

Monitore esse número e **dispare um alarme quando ele se aproximar de zero**.

**Como lidar com isso**

|Correção|Ideia|
|:---|:---|
|**Mínimos quadrados amortecidos (DLS)**|Adicione um pouco de "atrito" para que a solução não possa explodir: $\dot{q} = J^\top (J J^\top + \lambda^2 I)^{-1} v$|
|**Mudar o caminho**|Planeje com antecedência para contornar regiões singulares|
|**Desacelerar**|Desacelere perto de uma singularidade para ganhar tempo de reação|
|**Mudar a pose**|Para a mesma pose alvo, escolha uma solução não singular|

**Dois tipos de singularidades**

- **Fronteira** do espaço de trabalho: estendido até o ponto mais distante; direções são perdidas
- **Interior** do espaço de trabalho: punho colinear / cotovelo esticado; graus de liberdade são reduzidos

## 24.9 IK analítica vs. IK numérica

IK analítica resolve a equação diretamente; IK numérica itera em direção à resposta. A mesma tarefa — calcular $25 \times 4$ — feita das duas maneiras:

| |Analítica|Numérica|
|:---|:---|:---|
|**Ideia**|"×4 significa ×2 depois ×2": calcule $25 \times 2 = 50$, depois $\times 2 = 100$|Chute 90, perceba que falta 10, chute 102, depois 100 — ajuste até coincidir|
|**Resultado**|Um passo, exato|Algumas iterações, suficientemente próximo|

**Diferenças centrais**

|Dimensão|IK analítica|IK numérica|
|:---|:---|:---|
|Abordagem|Resolve a equação diretamente|Aproximação iterativa|
|Velocidade|Mais rápida (microssegundos)|Mais lenta (ms~s)|
|Precisão|Exata|Aproximada (ajustável)|
|Generalidade|Fraca|Forte|
|Saída|Fórmula em forma fechada|Resultado numérico|

**IK analítica** — resolva a equação de uma vez por todas, e você obtém fórmulas como

$$
\theta_1 = \operatorname{atan2}(\ldots), \qquad \theta_2 = \operatorname{acos}(\ldots), \qquad \vdots
$$

|Prós|Contras|
|:---|:---|
|Calculada em uma linha de código; sem erro de iteração; pode listar **todas** as soluções|Nem todo robô tem solução em forma fechada; com muitas juntas e uma estrutura complexa a equação não pode ser resolvida; uma vez que o robô muda, cada fórmula deve ser reescrita|

**IK numérica** — nenhuma fórmula, apenas repetir "dobre um pouco as juntas, verifique se a extremidade se aproximou, se não dobre um pouco mais" até ficar suficientemente perto.

|Prós|Contras|
|:---|:---|
|Funciona para qualquer robô; sem equações para derivar; fácil adicionar restrições|Lenta (precisa de iteração); pode ficar presa em uma solução errada; explode em singularidades|

**Cenários de aplicação**

|Cenário|Escolha|
|:---|:---|
|2 juntas, 3 juntas, geometria especial|Analítica (rápida, exata)|
|Braço industrial padrão de 6 eixos|Qualquer uma, depende do cenário|
|Braço redundante de 7 eixos|Numérica (sem solução analítica)|
|Fechado / paralelo|Numérica (analítica é difícil de derivar)|
|Controle em tempo real (kHz)|Analítica ou solução analítica gerada offline|
|Servo visual (30 Hz)|Numérica|

**Pontos-chave**

- O **espaço das juntas** é o que os motores entendem; o **espaço cartesiano** é o que a tarefa entende.
- **FK** é única, barata e sempre solucionável; **IK** pode ter várias soluções, uma solução ou nenhuma.
- O **Jacobiano** converte velocidade de junta em velocidade do efetuador final, e é como IK é realmente resolvida.
- **Singularidades** são poses onde o Jacobiano perde posto; detecte-as (menor valor singular) e amorteça-as (DLS).
- Próximo capítulo: uma vez que você consegue produzir uma pose, ainda precisa se mover até lá **de forma suave e segura**.

</div>
