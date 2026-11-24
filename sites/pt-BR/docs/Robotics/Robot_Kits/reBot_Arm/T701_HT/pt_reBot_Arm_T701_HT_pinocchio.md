---
title: reBot Arm T701 HT com Pinocchio
sidebar_label: Pinocchio
description: Verifique a cinemática direta e inversa e execute exemplos de compensação de gravidade, trajetória cartesiana e controle por teclado no reBot Arm T701 HT.
keywords:
  - reBot
  - T701 HT
  - Pinocchio
  - Kinematics
  - Gravity Compensation
slug: /rebot_t701_ht_pinocchio
translation:
  skip: [zh-CN]
last_update:
  date: 11/19/2026
  author: liujunjie
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# reBot Arm T701 HT com Pinocchio

<div className="rebot-page">

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp" alt="reBot Arm T701 HT bimanual robot" />
</div>

<GitHubStarButton
  owner="Seeed-Projects"
  repo="reBot-Arm-T701-SDK"
  fallbackCount={0}
  ariaLabel="Star T701-HT SDK on GitHub"
/>

O SDK do T701-HT usa o Pinocchio para carregar o modelo URDF e calcular as poses do efetuador final e os torques nas juntas devido à gravidade. Use os exemplos de cinemática direta (FK) e cinemática inversa (IK) para verificar o retorno das juntas do robô antes de executar os exemplos de compensação de gravidade, trajetória cartesiana e controle por teclado.

<section className="section-card">

## Preparar o robô

Instale o SDK e suas dependências usando as [instruções de instalação do T701 HT Quick Start](https://wiki.seeedstudio.com/pt-br/rebot_t701_ht_getting_started/#install-the-sdk). Em seguida, siga as etapas restantes do Quick Start para verificar o mapeamento da porta serial, ler o retorno das juntas e do gripper e verificar as posições de zero.

:::warning[Antes de executar os exemplos no robô]

- Certifique-se de que os braços estejam firmemente montados e remova qualquer carga. Use um braço na primeira execução.
- Os braços podem começar a se mover assim que você os selecionar em um exemplo de movimento. Desobstrua toda a faixa de movimento, incluindo o espaço acima e o caminho de volta ao zero. Permaneça junto ao robô durante toda a execução e mantenha-se afastado de pontos de beliscão nas juntas e nos grippers.

:::

Sempre que você abrir um novo terminal ou sessão SSH, vá para o diretório raiz do SDK, ative o ambiente Conda `t701-ht` que você criou no Quick Start e entre no diretório `scripts`.

```bash
conda activate t701-ht
cd scripts
```

Quando solicitado após iniciar um exemplo, digite `1` para o braço esquerdo, `2` para o braço direito ou `3` para ambos os braços.

</section>

<section className="section-card">

## Verificar cinemática direta e inversa

A cinemática direta calcula a pose do efetuador final a partir dos ângulos atuais das juntas. A verificação de cinemática inversa resolve os ângulos das juntas que produzem essa pose e os compara com as leituras atuais. Ambos os exemplos usam apenas o retorno das juntas para seus cálculos e enviam um comando de parada dos motores quando você sai com `Ctrl+C`.

| Exemplo | Comando | Saída esperada |
| --- | --- | --- |
| Cinemática direta (FK) em tempo real | `python t701_ht_forward_kinematics_test.py` | Imprime a posição do efetuador final em metros e o roll, pitch e yaw (RPY) em graus aproximadamente uma vez por segundo. |
| Verificação de FK para IK na pose atual | `python t701_ht_inverse_kinematics_test.py` | Imprime os ângulos atuais das juntas e a posição do efetuador final. Se a IK for bem-sucedida, também imprime o erro máximo do ângulo das juntas em radianos. |

</section>

<section className="section-card">

## Compensação de gravidade

`G(q)` é o torque de gravidade que o modelo calcula a partir dos ângulos das juntas `q`. A compensação de gravidade facilita o movimento manual dos braços.

| Exemplo | Comando | Comportamento esperado |
| --- | --- | --- |
| Compensação de gravidade | `python t701_ht_gravity_compensation.py` | Aplica `0.8 × G(q)` sujeito aos limites de torque e imprime o torque de compensação. |
| Compensação de gravidade com saída de FK | `python t701_ht_gravity_compensation_with_fk.py` | Aplica `G(q)` sujeito aos limites de torque e imprime os ângulos das juntas, o torque de compensação e a pose do efetuador final. |

Quando você pressiona `Ctrl+C`, ambos os exemplos de compensação de gravidade param os motores diretamente.

</section>

<section className="section-card">

## Controle cartesiano

### Mover para um alvo usando IK

<div className="row row--align-top">
<div className="col col--8" style={{minWidth: 0}}>

Primeiro retorna as juntas para zero. Se a solução de IK para a pose alvo passar na verificação de erro, o braço se move até o alvo usando `moveJ`.

```bash
python t701_ht_inv_posvel_control.py
```

</div>
<div className="col col--4">
<div className="image-frame" style={{marginTop: 0}}>

![Demonstração de mover para um alvo usando IK (MOVEJ)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/T701_HT/pinocchio/rebot-t701-ht-ik-movej.gif)

</div>
</div>
</div>

### Cinemática inversa por programação quadrática (QP)

<div className="row row--align-top">
<div className="col col--8" style={{minWidth: 0}}>

Move para a pose inicial de VR, depois eleva o braço e traça um círculo acima da cabeça.

```bash
python t701_ht_qp_ik.py
```

</div>
<div className="col col--4">
<div className="image-frame" style={{marginTop: 0}}>

![Demonstração de círculo acima da cabeça com cinemática inversa QP](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/T701_HT/pinocchio/rebot-t701-ht-qp-ik-circle.gif)

</div>
</div>
</div>

### Translação MoveL

<div className="row row--align-top">
<div className="col col--8" style={{minWidth: 0}}>

Mantém a orientação alvo do efetuador final enquanto segue, em sequência, trajetórias em linha reta, diagonais e quadradas.

```bash
python t701_ht_moveL_pos_control.py
```

</div>
<div className="col col--4">
<div className="image-frame" style={{marginTop: 0}}>

![Demonstração de translação MoveL](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/T701_HT/pinocchio/rebot-t701-ht-movel-translation.gif)

</div>
</div>
</div>

### Rotação MoveL

Mantém a posição alvo do efetuador final enquanto gira em torno dos eixos locais do efetuador final e executa um movimento cônico.

```bash
python t701_ht_moveL_rotate_control.py
```

Ambos os exemplos MoveL começam movendo para a pose inicial de VR. Cada trajetória é executada por 5 segundos, excluindo o posicionamento inicial e o retorno ao zero. Todos os quatro exemplos desta seção retornam ao zero e param ao final.

</section>

<section className="section-card">

## Controle por teclado

- **Transladar.** Use `W` / `S`, `A` / `D` e `Q` / `E` para se mover ao longo dos eixos X, Y e Z, respectivamente.
- **Rotacionar.** Use `1` / `2`, `3` / `4` e `5` / `6` para girar em torno dos eixos X, Y e Z, respectivamente.
- **Redefinir a postura de referência.** No exemplo de travamento de postura em espaço nulo, pressione `R` para definir a postura atual das juntas como referência.
- **Sair.** Pressione `Esc` ou `Ctrl+C` para retornar ao zero e parar.

<div className="row row--align-top">
<div className="col col--8" style={{minWidth: 0}}>

Execute esses exemplos em um terminal local interativo ou sessão SSH. Depois que você selecionar os braços, eles se movem automaticamente para a pose inicial de VR antes de aceitar a entrada pelo teclado.

**Pose do efetuador final**

Cada pressionamento de tecla altera a pose alvo do efetuador final em um passo. Se a IK falhar, o exemplo mantém o alvo anterior das juntas.

```bash
python t701_ht_keyboard_cartesian_pos_control.py
```

**Velocidade do efetuador final**

Mantenha uma tecla pressionada para transladar ou rotacionar continuamente o efetuador final. Solte-a para reduzir a velocidade comandada até zero.

```bash
python t701_ht_keyboard_cartesian_vel_control.py
```

**Velocidade do efetuador final com previsão de colisão**

Use as teclas para controlar a velocidade do efetuador final. Se o exemplo prever uma colisão ou violação de limite de junta, ele comanda velocidade zero e exibe uma mensagem.

```bash
python t701_ht_keyboard_cartesian_vel_collision_control.py
```

**Travamento de postura em espaço nulo**

Acompanha a pose alvo do efetuador final enquanto mantém a postura das juntas o mais próxima possível da postura de referência.

```bash
python t701_ht_keyboard_cartesian_pd_nullspace_lock_control.py
```

</div>
<div className="col col--4">
<div className="image-frame" style={{marginTop: 0}}>

![Demonstrações de controle por teclado](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/T701_HT/pinocchio/rebot-t701-ht-keyboard-control.gif)

</div>
</div>
</div>

:::warning[Escopo da previsão de colisão]

Depois que os braços atingem a pose inicial de VR, o exemplo de velocidade do efetuador final com previsão de colisão verifica colisões e violações de limite de junta nos próximos 0,20 segundos. As verificações de colisão usam as malhas STL em `T701-HT_URDF/meshes/` e incluem colisões entre os braços no modo de dois braços. Deixe folga durante a inicialização e o retorno ao zero e reserve espaço extra para os grippers e para a distância real de parada.

:::

</section>

</div>
