---
description: "Capítulo 4 do Curso para Iniciantes em Inteligência Incorporada da Seeed — fundamentos de braços robóticos e atuadores de junta, incluindo faixas de segurança, estrutura, redutores, encoders e modos de controle de motores DM/RS."
title: Capítulo 4 - Fundamentos de Braços Robóticos e Atuadores de Junta
keywords:
  - reBot
  - Robotic Arm
  - Joint Actuator
  - Reducer
  - Encoder
  - DM Motor
  - RS Motor
  - Control Mode
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_4
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: LiuJunjie
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/pt-br/rebot_embodied_ai_course_chapter_4/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 2 · Capítulo 4 · Teoria</span>
    <h2>4. Fundamentos de Braços Robóticos e Atuadores de Junta</h2>
    <p>
      Capítulo 4 do Curso para Iniciantes em Inteligência Incorporada da Seeed — fundamentos de braços robóticos
      e atuadores de junta, incluindo faixas de segurança, estrutura, redutores, encoders e modos de controle
      de motores DM/RS.
    </p>
    <div className="hero-actions">
      <a href="#faixa-de-seguranca">Faixa de segurança</a>
      <a href="#modos-de-controle-dm">Modos de controle</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Neste capítulo</strong>
    <span>4.1 Faixa de Segurança e Espaço de Trabalho do Braço Robótico</span>
    <span>4.2 Introdução à Estrutura Básica de um Braço Robótico</span>
    <span>4.3 Atuador de Junta</span>
    <span>4.4 Redutor</span>
    <span>4.5 Encoder</span>
    <span>4.6 Interface e Fiação do Motor</span>
    <span>4.7 Modos de Controle do Motor DM</span>
    <span>4.8 Diferentes Modos dos Motores RS</span>
    <span>4.9 Princípios de Parada de Emergência e Desligamento Anormal</span>
  </div>
</section>

<RebotCourseNav />

## 4.1 Faixa de Segurança e Espaço de Trabalho do Braço Robótico

<section id="safety-range" className="section-card">
  <div className="section-title">
    <span>Segurança</span>
    <h2>4.1 Faixa de Segurança e Espaço de Trabalho do Braço Robótico</h2>
  </div>

Compreender os parâmetros na tabela abaixo é a base para usar um braço robótico com segurança:

- **Alcance** define o limite de segurança do braço robótico e não deve ser excedido. A faixa de alcance define o espaço de trabalho seguro, evitando que o braço robótico colida com equipamentos, grades ou pessoas durante o movimento.

- **Carga nominal** define a base para operação segura e eficiente e não deve ser excedida por longos períodos. Ignorar a carga nominal é extremamente perigoso. Operar além da carga nominal levará diretamente a: torque insuficiente do motor e das juntas, superaquecimento dos componentes e redução da vida útil, além de falhas mecânicas súbitas.

- **Carga máxima** marca a linha vermelha física absoluta que nunca deve ser tocada — é um limite de resistência de uso único.

:::danger
Tratar a carga máxima como padrão de uso diário é extremamente perigoso. Isso significa que cada componente do braço robótico está operando no limite da resistência estrutural, e qualquer pequeno impacto ou mudança de postura pode levar a uma falha estrutural catastrófica, como fratura de junta ou colapso do braço robótico.
:::

| Nome | reBot Arm DM | reBot Arm RS |
| :--- | :--- | :--- |
| Postura de Posição Zero | ![reBot DM zero position](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-01.jpg) | ![reBot RS zero position](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-02.jpg) |
| Faixa da Junta J1 | -150° ~ +150° | -150° ~ +150° |
| Faixa da Junta J2 | -220° ~ 0° | -220° ~ 0° |
| Faixa da Junta J3 | -220° ~ 0° | -220° ~ 0° |
| Faixa da Junta J4 | -90° ~ +90° | -90° ~ +90° |
| Faixa da Junta J5 | -90° ~ +90° | -90° ~ +90° |
| Faixa da Junta J6 | -180° ~ +180° | -180° ~ +180° |
| Faixa do Gripper | -325° ~ 0° | -345° ~ 0° |

:::note Postura de posição zero
A postura de posição zero do braço robótico é a referência absoluta para todo o planejamento de movimento e cálculo de posição. Quando o braço robótico precisa se mover para um determinado ponto, ele essencialmente calcula quanto cada junta precisa girar a partir do ponto inicial de posição zero. Portanto, ao definir o ponto zero de cada motor de junta e inicializar o braço robótico, essa postura deve ser mantida.
:::

Os limites mecânicos são fronteiras físicas rígidas determinadas pela própria estrutura mecânica e não podem ser alterados. Eles atuam como batentes físicos, limitando fundamentalmente a faixa de ângulo de rotação das juntas. Isso impede que o braço robótico gire em excesso devido à perda de controle, o que poderia causar danos à sua própria estrutura ou colisão com equipamentos ao redor.

:::tip
Embora as juntas do braço robótico tenham limites mecânicos, você ainda deve prestar atenção à faixa de movimento das diferentes juntas para evitar que os motores das juntas travem por longos períodos devido à ultrapassagem da faixa de movimento.
:::

</section>

## 4.2 Introdução à Estrutura Básica de um Braço Robótico

<section id="structure" className="section-card">
  <div className="section-title">
    <span>Estrutura</span>
    <h2>4.2 Introdução à Estrutura Básica de um Braço Robótico</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-03.jpg" alt="Basic structure of a robotic arm" />
</div>

| Nome | Posição | Eixo de Movimento | Função |
| :--- | :--- | :--- | :--- |
| Base | A parte onde o motor 1 é fixado | Gira em torno do eixo vertical da base (eixo Z) | Permite que todo o braço robótico gire horizontalmente |
| Ombro | A parte saliente que contém o motor 2 | Gira em torno do eixo horizontal do ombro (eixo Y) | Permite que o braço superior incline para frente/trás ou suba/desça em relação ao ombro |
| Braço Superior | A parte que conecta a junta do ombro e a junta do cotovelo | Gira em torno do eixo horizontal do cotovelo (eixo Y) | Permite que o antebraço dobre ou estenda em relação ao braço superior |
| Cotovelo | A parte que contém o motor 3, localizada na junção do braço superior com o antebraço | Gira em torno do eixo horizontal do punho (eixo Y) | Permite que o punho oscile para cima e para baixo; juntamente com a rotação em yaw do punho, determina em conjunto a direção de apontamento da extremidade do braço robótico no espaço |
| Antebraço | A parte que conecta a junta do cotovelo e a junta do punho | Gira em torno do eixo vertical do punho (eixo Z) | Permite que o punho oscile para a esquerda e para a direita; juntamente com a flexão do punho, determina em conjunto a direção de apontamento da extremidade do braço robótico no espaço |
| Punho | A parte que contém os motores 4, 5 e 6, localizada entre o gripper de extremidade e o antebraço | Gira em torno do eixo central do punho (eixo X) | Permite que a extremidade do punho gire em torno de seu próprio eixo central |
| Gripper | A parte que contém o motor 7, montada no punho | Abertura/fechamento translacional | Permite que o braço robótico agarre objetos |

</section>

## 4.3 Atuador de Junta

<section id="joint-actuator" className="section-card">
  <div className="section-title">
    <span>Atuador</span>
    <h2>4.3 Atuador de Junta</h2>
  </div>

Um atuador de junta é composto por **driver → motor → redutor → rolamento/flange de saída → elo do robô**, enquanto ao mesmo tempo **encoder/sensor de torque → controlador → driver** forma o controle em malha fechada.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-04.jpg" alt="Joint actuator" />
</div>

</section>

## 4.4 Redutor

<section id="reducer" className="section-card">
  <div className="section-title">
    <span>Redutor</span>
    <h2>4.4 Redutor</h2>
  </div>

O torque original fornecido por um motor geralmente é muito pequeno, mas por meio de engrenagens com uma relação de redução `i`, o torque de saída é amplificado em um fator `i`.

- Sem um redutor, para fornecer grande torque, seria necessário aumentar o núcleo de ferro e os ímãs, o que tornaria o volume do motor muito grande, fazendo com que os custos e o peso disparassem.
- Um redutor é a alavanca física ideal que troca alta velocidade de rotação por grande torque.
- O rotor do motor em si é muito leve e, quando a carga é pesada, o motor pode oscilar violentamente durante a aceleração e desaceleração. Um redutor pode dividir a inércia de carga refletida no eixo do motor pelo quadrado da relação de redução, tornando o loop de corrente do motor mais estável.

O braço robótico reBot atualmente adota duas soluções técnicas diferentes de acionamento de junta: **motor de junta com engrenagem planetária Damiao DM** e **motor de junta Lingzu Era RS QDD (quase acionamento direto)**. A diferença central entre as duas não é apenas a marca do motor, mas **o grau de redução do redutor**.

Simplificando:

> **Solução DM:** Depende de uma grande relação de redução para “amplificar” o torque de saída do motor.
> **Solução RS:** Minimiza a relação de redução, permitindo que o próprio motor suporte mais do torque de saída.

Portanto, as duas soluções produzem diferenças significativas em **torque de saída, velocidade de movimento, retrodirigibilidade, controle de força, impedância mecânica, resistência a impactos e peso estrutural**.

### 4.4.1 Redutor Planetário

Os redutores usados nos motores DM e RS são redutores planetários. Portanto, apenas o princípio dos redutores planetários é apresentado aqui.

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-05.png" alt="Planetary reducer" />
</div>

Um redutor planetário geralmente tem a coroa fixa, o engrenagem solar como entrada e o porta-satélites como saída. Nesse caso, a relação de transmissão do motor é máxima. Suponha que a relação de transmissão seja `i`. A relação de transmissão `i` está relacionada apenas ao número de dentes da coroa `Zr` e ao número de dentes da engrenagem solar `Zs`. A expressão para a relação de transmissão é:

$$
i = 1 + \frac{Z_r}{Z_s}
$$

Uma rotação da engrenagem solar faz com que as engrenagens planetárias girem em seus próprios eixos. Mas, como a coroa está fixa, as engrenagens planetárias não podem simplesmente girar em torno de um eixo fixo; em vez disso, elas fazem o porta-satélites girar lentamente. Nesse momento, o rotor do motor gira `i` vezes, e o porta-satélites gira aproximadamente 1 vez.

:::note
A velocidade do porta-satélites de saída é reduzida em um fator `i`, mas o torque de saída é aumentado em um fator `i`. Portanto, o redutor planetário converte a alta velocidade e o pequeno torque do motor na baixa velocidade e grande torque exigidos pela junta.
:::

### 4.4.2 Solução DM: Motor de Junta com Engrenagem Planetária

A versão DM do reBot usa motores de junta com engrenagem planetária da Damiao Technology, por exemplo:

- **DM4310:** Relação de redução aproximadamente 10:1
- **DM4340P:** Relação de redução aproximadamente 40:1

:::info
A versão P do DM4340P adota uma estrutura de rolamento de rolos cruzados, usada para suportar as cargas radiais e axiais geradas durante a operação da junta.
:::

Sua estrutura básica pode ser entendida como:

**Motor de alta velocidade → Redutor planetário → Eixo de saída da junta**

O próprio motor possui uma velocidade de rotação relativamente alta, mas torque de saída limitado. Após passar pelo redutor planetário, a velocidade de saída diminui enquanto o torque de saída é amplificado.

Idealmente, quando a relação de redução é (N:1):

$$
\begin{aligned}
\omega_{\text{out}} &= \frac{\omega_{\text{motor}}}{N} \\
T_{\text{out}} &\approx T_{\text{motor}} \times N \times \eta
\end{aligned}
$$

Onde:

- `N`: relação de redução
- `ω_motor`: velocidade de rotação
- `T`: torque
- `η`: eficiência de transmissão do redutor

:::note Example
Sob as mesmas demais condições, um redutor 40:1 pode fornecer maior capacidade de amplificação de torque em comparação com um redutor 10:1, mas ao mesmo tempo a velocidade de saída será ainda mais reduzida.
:::

Portanto, a ideia central da solução DM pode ser resumida como:

> **"O motor é responsável pela rotação em alta velocidade, e o redutor é responsável por amplificar o torque."**

**Principais vantagens da solução DM:**

- Grande torque de saída
- Carga relativamente baixa no motor
- Adequada para juntas que exigem grande capacidade de carga estática
  - Braços robóticos de carga pesada
  - Cenários que exigem grande torque na junta
  - Cenários em que a exigência de velocidade absoluta de saída da junta não é particularmente alta

**Principais desvantagens da solução DM:**

- Baixa retrodirigibilidade
  > Quanto maior a relação de redução, mais "difícil de empurrar" o braço robótico geralmente é.
- Alta impedância mecânica
- A velocidade de saída é limitada

### 4.4.3 Solução RS: Motor de junta QDD Quasi-Direct-Drive

A versão reBot RS adota o **motor de junta QDD (Quasi-Direct Drive)** da Lingzu Era. A ideia central do QDD é exatamente o oposto das juntas tradicionais com alta relação de redução:

> **Minimizar a relação de redução, permitindo que o motor assuma diretamente mais da tarefa de saída da junta.**

Sua estrutura básica pode ser entendida como: **Motor de alta densidade de torque → Redutor planetário de baixa relação de redução → Eixo de saída da junta.** Portanto, o QDD não é completamente sem redutor, mas sim:

> **"O redutor fornece apenas uma pequena amplificação de torque, dependendo principalmente da alta densidade de torque do próprio motor para obter o torque de saída da junta."**

**Por que o QDD requer um motor mais forte?** Esta é a chave para entender a diferença entre as duas soluções. Suponha que ambas as juntas precisem, em última análise, fornecer:

$$
T_{\text{out}} = 40\ \mathrm{N} \cdot \mathrm{m}
$$

Se for usado um redutor 40:1, então teoricamente o motor só precisa fornecer:

$$
T_{\text{motor}} \approx \frac{40}{40} = 1\ \mathrm{N} \cdot \mathrm{m}
$$

Se for usado um redutor 8:1, então ele precisa:

$$
T_{\text{motor}} \approx \frac{40}{8} = 5\ \mathrm{N} \cdot \mathrm{m}
$$

Ou seja: **após reduzir a relação de redução, o motor deve fornecer mais torque por si só.** Portanto, a solução QDD impõe maiores exigências ao motor, exigindo que o motor tenha:

- Maior densidade de torque
- Maior diâmetro efetivo
- Capacidade de dissipação de calor mais forte
- Maior capacidade de suportar corrente de pico
- Melhor capacidade de sobrecarga

Isso também explica por que o QDD geralmente adota soluções como motores de rotor externo de alta densidade de torque. Avaliações relacionadas também apontam que o QDD obtém melhor retrodirigibilidade e transparência de força ao reduzir a relação de redução, mas ao custo de impor maiores exigências à densidade de torque do motor.

O maior valor do QDD não é simplesmente "uma relação de redução menor", mas sim: **aproximar a junta das características dinâmicas do próprio motor.** Devido à baixa relação de redução, a influência do redutor sobre o movimento do sistema é relativamente pequena, de modo que a junta possui melhor retrodirigibilidade.

### 4.4.4 Diferenças centrais entre as duas soluções

As duas soluções podem ser entendidas como duas filosofias de projeto completamente diferentes.
|      **Item de comparação**     |     **Acionamento por engrenagem planetária DM**    |                    **RS QDD (Quasi-Direct Drive)**                   |
| :--------------------------: | :--------------------------------: | :------------------------------------------------------------------: |
|       **Conceito central**       | Amplifica o torque por meio de uma caixa de engrenagens |           Depende de um motor de alta densidade de torque para a saída           |
|    **Relação de engrenagem típica**    |             10:1, 40:1             |                     Normalmente em torno de 7,75:1–10:1                     |
| **Requisito de torque do motor** |           Relativamente baixo           |                                Mais alto                                |
|       **Torque de saída**      |                Alto                |             Alto, mas mais dependente do próprio motor             |
|       **Velocidade de saída**       |           Relativamente baixa           |                            Relativamente alta                           |
|      **Retrodirigibilidade**     |                Menor               |                                Maior                                |
|   **Impedância mecânica**   |               Maior               |                                 Menor                                |
|    **Transparência de força**    |                Menor               |                                Maior                                |
|     **Controle de conformidade**    |        Relativamente difícil        |                           Mais vantajoso                          |
|     **Resistência a impacto**    |  Depende da estrutura da caixa de engrenagens  | Relações de engrenagem menores geralmente são mais favoráveis à resistência a impacto |
|     **Manutenção de posição**     |              Mais forte              |                  Depende mais do controle ativo do motor                 |
|    **Requisitos do motor**    |           Relativamente baixos           |         Alta densidade de torque e alta capacidade de corrente de pico         |
|    **Vantagens típicas**    |  Alta capacidade de torque e carga útil  |         Resposta dinâmica, retrodirigibilidade e controle de força         |
|       **Elevação de temperatura**       |               Mais lenta               |                                Mais rápida                                |


A alta transparência de força, forte retrodirigibilidade e baixa impedância mecânica trazidas pela baixa relação de redução do QDD são suas principais vantagens em relação às soluções de transmissão com alta relação de redução; ao mesmo tempo, uma baixa relação de redução também significa que o motor precisa suportar um torque maior, impondo, portanto, maiores exigências à densidade de torque e ao gerenciamento térmico do motor.

:::tip Summary

- **A solução de engrenagem planetária DM** "troca um redutor mecânico por maior torque de saída".
- **A solução QDD quasi-direct-drive** "troca um motor de desempenho superior por melhor desempenho dinâmico e capacidade de controle de força".

Não existe, em sentido absoluto, "qual é mais avançada" entre as duas. Para um braço robótico, a escolha real depende do objetivo da aplicação:

- **Se capacidade de carga, rigidez da junta e grande torque de saída forem mais importantes** → a solução DM tem mais vantagens.
- **Se velocidade de movimento, retrodirigibilidade, colaboração homem-robô e controle de força forem mais importantes** → a solução QDD tem mais vantagens.

E para braços robóticos voltados à interação homem-robô, aprendizado por imitação e aprendizado por reforço, a baixa impedância mecânica e a alta retrodirigibilidade do QDD são particularmente atraentes, porque as características dinâmicas do braço robótico estão mais próximas do estado de "o motor acionando diretamente a carga", o que é propício ao movimento de alta dinâmica e ao controle de interação de força.
:::

</section>

## 4.5 Encoder

<section id="encoder" className="section-card">
  <div className="section-title">
    <span>Encoder</span>
    <h2>4.5 Encoder</h2>
  </div>

Um encoder é usado para medir o ângulo de rotação. Tipos comuns incluem encoders incrementais, encoders absolutos multivoltas e encoders absolutos de volta única. Tanto os motores Damiao (DM) quanto os motores Lingzu (RS) contêm 2 encoders magnéticos absolutos de volta única. A resolução do encoder é de 14 bits para ambos.

### Como um encoder magnético de posição absoluta determina a posição

Um encoder magnético de posição absoluta usa um ímã rotativo para alterar a direção do campo magnético e calcula o ângulo por meio de um chip magnetorresistivo, conhecendo diretamente a posição atual ao ser energizado.

:::info Analogy
Imagine o encoder magnético como uma bússola inteligente com seu próprio "mapa".

- O ímã é um pequeno ímã rotativo fixado no rotor do motor. Quando ele gira, a direção do campo magnético ao redor muda de acordo — assim como o ponteiro de uma bússola sempre aponta para o sul, mas este ponteiro pode girar ao redor.
- O chip magnetorresistivo é o "sensor de mapa". Ele possui marcações de direção de 360° ao seu redor e pode ler em tempo real, como ao ler uma bússola, se o campo magnético atual aponta para 0°, 90° ou 270°.
:::

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-06.png" alt="Absolute position magnetic encoder" />
</div>

### Por que motores de junta usam dois encoders

Um motor de junta contém 2 encoders magnéticos de posição absoluta, um medindo o rotor do motor de alta velocidade e outro medindo o eixo de saída da junta do robô, usados para compensar erros do redutor, melhorar a precisão e garantir a segurança.

:::info Analogy
Você está sentado em um carro, segurando o volante (extremidade do rotor do motor), mas o volante não está diretamente conectado às rodas; em vez disso, ele está conectado às rodas (extremidade de saída do motor) por meio de um longo eixo flexível elástico em forma de mola (redutor).

Se o volante girar 10 voltas, mas as rodas girarem apenas 9,8 voltas, o sistema imediatamente sabe que 0,2 volta foi absorvida pelo eixo flexível em mola e compensa imediatamente um pouco mais — isso compensa o erro com precisão extremamente alta.
:::

### A posição não é perdida após desligar

O motor não perde a posição após ser desligado porque o encoder absoluto salva a posição atual. Ao religar, ele lê os ângulos do lado do motor e do lado de saída e então recupera a posição por meio da verificação da relação de redução.

</section>

## 4.6 Interface e Fiação do Motor

<section id="interfaces" className="section-card">
  <div className="section-title">
    <span>Interfaces</span>
    <h2>4.6 Interface e Fiação do Motor</h2>
  </div>

### Interface e Fiação do Motor DM

| Nome | Imagem | Função |
| :--- | :--- | :--- |
| XT30 (2+2) | ![XT30 2+2](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-07.png) | 1. Conecte a fonte de alimentação através do cabo de alimentação com conector XT30(2+2)-F, com tensão nominal de 24 V, para alimentar o motor. <br/>2. Conecte dispositivos de controle externos através do terminal de comunicação CAN, que pode receber comandos de controle CAN e retornar informações de status do motor. <br/>3. O motor contém duas interfaces de alimentação; qualquer interface (incluindo o terminal de comunicação CAN) pode ser usada de forma independente, ou vários motores podem ser conectados em série para facilitar a fiação. |
| GH1.25 3-pin | ![GH1.25 3pin](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-08.png) | Através do cabo GH1.25-3 pinos, use uma ferramenta de depuração USB2CAN para conectar a um PC e use o assistente de depuração da Damiao Technology para realizar configurações de parâmetros e atualizações de firmware no motor. |

### Interface e Fiação do Motor RS

| Nome | Imagem | Função |
| :--- | :--- | :--- |
| XT30 (2+2) | ![XT30 2+2](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-09.png) | 1. Conecte a fonte de alimentação através do cabo de alimentação com conector XT30(2+2)-F, com tensão nominal de 24 V, para alimentar o motor. <br/>2. Conecte dispositivos de controle externos através do terminal de comunicação CAN, que pode receber comandos de controle CAN e retornar informações de status do motor. <br/>3. O motor contém duas interfaces de alimentação; qualquer interface (incluindo o terminal de comunicação CAN) pode ser usada de forma independente, ou vários motores podem ser conectados em série para facilitar a fiação. |

</section>

## 4.7 Modos de Controle do Motor DM

<section id="dm-control-modes" className="section-card">
  <div className="section-title">
    <span>Modos de Controle DM</span>
    <h2>4.7 Modos de Controle do Motor DM</h2>
  </div>

O controlador eletrônico de velocidade converte os dados CAN recebidos em variáveis de controle para cálculo, obtendo um valor de torque como referência de corrente para o laço de corrente. O laço de corrente finalmente atinge a corrente de torque especificada de acordo com sua lei de ajuste.

### Protocolo MIT

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-10.jpg" alt="MIT protocol" />
</div>

O modo MIT pode controlar o motor por meio de três parâmetros: **posição, velocidade e torque**.

O torque final de saída do motor é determinado principalmente em conjunto pelos seguintes parâmetros:

- **Pdes**: Posição alvo
- **Vdes**: Velocidade alvo
- **Kp**: Intensidade do controle de posição; quanto maior o Kp, mais o motor tende a retornar rapidamente à posição alvo
- **Kd**: Intensidade do controle de velocidade; pode ser usado para suprimir a vibração do motor e tornar o movimento mais estável
- **T_ff**: Torque fornecido diretamente

Pode ser entendido de forma simples como:

**Saída do motor = Controle de posição + Controle de velocidade + Torque de avanço (feedforward)**

O modo MIT pode alcançar diferentes métodos de controle de acordo com diferentes combinações de parâmetros:

**Controle de posição**

1. Defina Pdes, Kp, Kd.
2. O motor se moverá para a posição especificada e suprimirá a vibração durante o movimento por meio de Kd.

**Controle de velocidade**

1. Defina Kp = 0, Kd ≠ 0
2. Em seguida, forneça Vdes para controlar o motor a girar na velocidade alvo.

**Controle de torque**

1. Defina Kp = 0, Kd = 0
2. Em seguida, defina diretamente T_ff para controlar o motor a fornecer o torque especificado.

:::warning
Ao controlar a posição, kd não pode ser definido como 0, caso contrário causará oscilações no motor ou até mesmo perda de controle.
:::

### Modo Posição-Velocidade

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-11.jpg" alt="Position-velocity mode" />
</div>

O modo de cascata de posição adota um modo de controle em cascata de três laços, com o laço de posição como o laço mais externo, sua saída como referência para o laço de velocidade, e a saída do laço de velocidade como referência para o laço de corrente interno, usado para controlar a corrente real de saída.

O torque final de saída do motor é determinado principalmente em conjunto pelos seguintes parâmetros:

- **p_des**: A posição alvo para controle.
- **v_des**: Usado para limitar a velocidade absoluta máxima durante o movimento.
- **kp_pos**: Determina o fator de amplificação do erro de posição sobre o comando de velocidade.
- **ki_pos**: Determina a força estática de manutenção de posição.
- **kp_vel**: Determina diretamente o torque de aceleração dinâmica.
- **ki_vel**: Determina a capacidade de rejeição de perturbações de carga durante o trecho de velocidade constante.

:::note
Se o modo de cascata de posição usar os parâmetros de controle recomendados pelo assistente de depuração, ele pode alcançar boa precisão de controle, e o processo de controle é relativamente suave, mas o tempo de resposta é relativamente longo. Além de v_des, os parâmetros relacionados configuráveis também incluem configurações de aceleração/desaceleração. Se ocorrerem oscilações adicionais durante o processo de controle, a aceleração/desaceleração pode ser aumentada.

As unidades de p_des e v_des são rad e rad/s, respectivamente, o tipo de dado é float, e o fator de amortecimento deve ser definido como um número positivo diferente de zero.
:::

### Modo de Velocidade

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-12.jpg" alt="Velocity mode" />
</div>

O laço externo do modo de velocidade é o laço de velocidade, e a saída do laço de velocidade serve como referência para o laço de corrente interno.

O torque final de saída do motor é determinado principalmente em conjunto pelos seguintes parâmetros:

- **v_des**: Velocidade alvo durante o movimento.
- **kp_vel**: Determina diretamente o torque de aceleração dinâmica.
- **ki_vel**: Determina a capacidade de rejeição de perturbações de carga durante o trecho de velocidade constante.

:::note
A unidade de v_des é rad/s, e o tipo de dado é float. Se você precisar usar o assistente de depuração para calcular automaticamente os parâmetros, será necessário definir o fator de amortecimento como um número positivo diferente de zero, geralmente variando de 2,0 a 10,0. Um fator de amortecimento muito pequeno trará oscilações de velocidade e grande overshoot, enquanto um fator de amortecimento muito grande trará um longo tempo de subida. O valor de configuração recomendado é 4,0.
:::

### Modo PVT (Controle Híbrido Força-Posição)

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-13.jpg" alt="PVT mode" />
</div>

O modo PVT (controle híbrido força-posição) controla dinamicamente a magnitude do torque de saída com base no controle do modo posição-velocidade. Um elo de saturação de comando de corrente é adicionado após o comando de saída do laço de velocidade, de modo que a referência do laço de corrente seja limitada dentro de um intervalo determinado.

O torque final de saída do motor é determinado principalmente em conjunto pelos seguintes parâmetros:

- **p_des**: A posição alvo para controle.
- **v_des**: Usado para limitar a velocidade absoluta máxima durante o movimento.
- **kp_pos**: Determina o fator de amplificação do erro de posição sobre o comando de velocidade.
- **ki_pos**: Determina a força estática de manutenção de posição.
- **kp_vel**: Determina diretamente o torque de aceleração dinâmica.
- **ki_vel**: Determina a capacidade de rejeição de perturbações de carga durante o trecho de velocidade constante.

</section>

## 4.8 Diferentes Modos dos Motores RS

<section id="rs-control-modes" className="section-card">
  <div className="section-title">
    <span>Modos de Controle RS</span>
    <h2>4.8 Diferentes Modos dos Motores RS</h2>
  </div>

### Modo de Controle de Movimento

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-14.png" alt="RS motion control mode" />
</div>

O modo de controle de movimento do RS é semelhante ao modo MIT do DM. A lógica de controle do modo de controle de movimento é a seguinte:

$$
t_{\text{ref}} = K_d\,(v_{\text{des}} - v_{\text{actual}}) + K_p\,(p_{\text{des}} - p_{\text{actual}}) + t_{\text{ff}}
$$

Por fim, t_ref é convertido na corrente iq desejada por meio de uma fórmula interna e é fornecido através do laço de corrente.

O torque final de saída do motor é determinado principalmente em conjunto pelos seguintes parâmetros:

- **Pdes**: Posição alvo
- **Vdes**: Velocidade alvo
- **Kp**: Intensidade do controle de posição; quanto maior o Kp, mais o motor tende a retornar rapidamente à posição alvo
- **Kd**: Intensidade do controle de velocidade; pode ser usado para suprimir a vibração do motor e tornar o movimento mais estável
- **T_ff**: Torque fornecido diretamente

Pode ser entendido de forma simples como:

**Saída do motor = Controle de posição + Controle de velocidade + Torque de avanço (feedforward)**

O modo de controle de movimento pode alcançar diferentes métodos de controle de acordo com diferentes combinações de parâmetros:

**Controle de posição**

1. Defina Pdes, Kp, Kd.
2. O motor se moverá para a posição especificada e suprimirá a vibração durante o movimento por meio de Kd.

**Controle de velocidade**

1. Defina Kp = 0, Kd ≠ 0
2. Em seguida, forneça Vdes para controlar o motor a girar na velocidade alvo.

**Controle de torque**

1. Defina Kp = 0, Kd = 0
2. Em seguida, defina diretamente T_ff para controlar o motor a fornecer o torque especificado.

### Modo de Corrente

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-15.png" alt="RS current mode" />
</div>

Este modo fornece o laço de corrente do motor como interface de controle para o usuário. Este modo geralmente não é utilizado. O uso desta interface pode se referir ao algoritmo FOC.

### Modo de Velocidade

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-16.png" alt="RS velocity mode" />
</div>

O modo de velocidade usa a diferença entre a velocidade definida e a velocidade atual como entrada para o controlador PI, e o torque de saída do controlador PI é limitado a uma faixa. O torque é convertido na corrente iq desejada por meio de uma fórmula interna e é enviado pelo loop de corrente.

O torque final de saída do motor é determinado principalmente em conjunto pelos seguintes parâmetros:

- **v_des**: Velocidade alvo durante o movimento, ou seja, a velocidade atual.
- **kp_vel**: Determina diretamente o torque de aceleração dinâmica.
- **ki_vel**: Determina a capacidade de anti-perturbação de carga durante o segmento de velocidade constante.
- **Proteção de torque**: Limita o torque de saída.

### Modo Posição-Velocidade (CSP)

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-17.png" alt="RS position-velocity mode CSP" />
</div>

O modo de posição CSP também pode ser chamado de modo posição-velocidade. A diferença entre o ângulo definido e o ângulo atual é usada como entrada para o loop de posição, onde o loop de posição é um controlador puramente proporcional. A saída do loop de posição passa por limitação de velocidade e então serve como entrada para o loop de velocidade. O loop de velocidade é um controlador PI, e o torque de saída passa por limitação de proteção de torque e então é convertido na corrente iq desejada, sendo enviado pelo loop de corrente.

O torque final de saída do motor é determinado principalmente em conjunto pelos seguintes parâmetros:

- **p_des**: A posição alvo para controle.
- **v_des**: Usado para limitar a velocidade absoluta máxima durante o movimento.
- **kp_pos**: Determina o fator de amplificação do erro de posição no comando de velocidade.
- **ki_pos**: Determina a força estática de manutenção de posição.
- **kp_vel**: Determina diretamente o torque de aceleração dinâmica.
- **ki_vel**: Determina a capacidade de anti-perturbação de carga durante o segmento de velocidade constante.
- **Proteção de torque**: Limita o torque de saída desejado.

### Modo Posição-Velocidade (PP)

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-4/ch4-18.png" alt="RS position-velocity mode PP" />
</div>

Este modo também é a interface de modo posição-velocidade fornecida pelo motorbridge.

O modo de posição PP adiciona um planejamento de curva de velocidade trapezoidal em comparação com o CSP. Ele recebe como entrada a velocidade definida, o ângulo definido e a aceleração definida, e gera o ângulo planejado. O ângulo planejado gerado pelo planejador de curva em T serve como entrada para o loop de posição, onde o loop de posição é um controlador puramente proporcional. A saída do loop de posição passa por limitação de velocidade e então serve como entrada para o loop de velocidade. O loop de velocidade é um controlador PI, e o torque de saída passa por limitação de proteção de torque e então é convertido na corrente iq desejada, sendo enviado pelo loop de corrente.

O torque final de saída do motor é determinado principalmente em conjunto pelos seguintes parâmetros:

**Parâmetros do planejador de curva em T:**

- **p_set**: A posição alvo desejada definida.
- **v_des**: O valor de velocidade desejado definido.
- **Acc_set**: A aceleração desejada definida.

**Parâmetros do loop de posição / loop de velocidade:**

- **p_des**: A posição alvo para controle.
- **v_des**: Usado para limitar a velocidade absoluta máxima durante o movimento.
- **kp_pos**: Determina o fator de amplificação do erro de posição no comando de velocidade.
- **ki_pos**: Determina a força estática de manutenção de posição.
- **kp_vel**: Determina diretamente o torque de aceleração dinâmica.
- **ki_vel**: Determina a capacidade de anti-perturbação de carga durante o segmento de velocidade constante.
- **Proteção de torque**: Limita o torque de saída desejado.

</section>

## 4.9 Princípios de Parada de Emergência e Desligamento Anormal

<section id="emergency-stop" className="section-card">
  <div className="section-title">
    <span>Segurança</span>
    <h2>4.9 Princípios de Parada de Emergência e Desligamento Anormal</h2>
  </div>

:::danger Regras de parada de emergência
1. **Tremores anormais devem ser desligados imediatamente.** Tremores de alta frequência significam que o motor está gerando torques de avanço e reversão em alta frequência e, se a alimentação não for cortada imediatamente, isso pode levar a danos ao motor.

2. **Ao bater em um limite, deve-se desligar imediatamente.** Bater em um limite significa que o motor pode estar em regime de travamento. Se a alimentação não for cortada imediatamente, isso pode levar ao superaquecimento ou dano do motor.

3. **Situações anormais, como a queda repentina do braço robótico, devem ser desligadas imediatamente** para evitar outras situações inesperadas.
:::

</section>

</div>
