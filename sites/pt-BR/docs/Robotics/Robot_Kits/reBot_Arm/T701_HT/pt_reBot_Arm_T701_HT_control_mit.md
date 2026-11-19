---
title: reBot Arm T701 HT MIT Control SDK
sidebar_label: MIT Control SDK
description: Execute o controle MIT de cinco parâmetros de um único motor com o SDK T701-HT e entenda a seleção de CAN, trajetórias alvo, feedback e retorno ao zero no desligamento.
keywords:
  - reBot
  - T701 HT
  - Python SDK
  - MIT Control
  - Motor Control
slug: /rebot_t701_ht_control_mit
translation:
  skip: [zh-CN]
last_update:
  date: 11/19/2026
  author: liujunjie
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# reBot Arm T701 HT MIT Control SDK

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

A interface MIT do SDK T701-HT define posição alvo, velocidade alvo, torque de feedforward, ganho de posição `Kp` e ganho de velocidade `Kd` em conjunto. Esta página apresenta o exemplo de rastreamento senoidal de um único motor, seus parâmetros, feedback e sequência de desligamento. Para compensação de gravidade de todo o braço e controle cartesiano, consulte [T701 HT with Pinocchio](https://wiki.seeedstudio.com/pt-br/rebot_t701_ht_pinocchio/).

<section className="section-card">

## Preparar o robô

Obtenha o SDK e instale suas dependências usando as [instruções de instalação do T701 HT Quick Start](https://wiki.seeedstudio.com/pt-br/rebot_t701_ht_getting_started/#instalar-o-sdk). Conclua o mapeamento serial e as verificações de feedback das juntas e do gripper e, em seguida, verifique a posição zero do motor selecionado.

- **Conexões.** O braço esquerdo usa CAN1; o braço direito usa CAN2. Defina `board_serial` em `T701-HT_robot_param/serial_binding.yaml` como o número de série USB da placa de comunicação.
- **IDs dos motores.** Em cada braço, ID1–ID7 são as sete juntas, e ID8 é o gripper.
- **Diretório de trabalho.** Execute todos os comandos desta página a partir da raiz do SDK. Em cada novo terminal ou sessão SSH, volte para esse diretório e ative o ambiente.

```bash
conda activate t701-ht
```

:::warning[Verifique a faixa de movimento antes de executar]

O motor selecionado começa a se mover imediatamente quando você executa um comando de movimento, sem outra seleção de braço ou confirmação. Fixe o hardware, remova cargas e libere a faixa de movimento e o caminho de retorno. Permaneça junto ao hardware e mantenha-se afastado dos pontos de beliscão das juntas e do gripper.

O alvo original é **±π rad (±180°)**. O loop de movimento chama diretamente a interface de baixo nível do motor, sem aplicar os limites de junta de alto nível ou compensação de gravidade. Essa trajetória pode exceder a faixa permitida de uma junta ou gripper montados. Em particular, a faixa de alto nível para o gripper ID8 é **−0.2 a 2.2 rad**, portanto ele não pode executar a trajetória original. Antes de executar, ajuste a posição alvo e a velocidade correspondente para se adequar ao mecanismo selecionado e verifique toda a trajetória e o caminho de retorno.

:::

</section>

<section className="section-card">

## Selecionar e executar um motor

O exemplo é `scripts/motor_example/t701_ht_pos_vel_torque_kp_kd_control.py`. Depois de verificar e ajustar a trajetória acima, escolha um comando que corresponda à sua fiação.

**Braço esquerdo CAN1, motor ID8:**

```bash
python scripts/motor_example/t701_ht_pos_vel_torque_kp_kd_control.py --can-port 1 --motor-id 8 --arm left
```

**Braço direito CAN2, motor ID8:**

```bash
python scripts/motor_example/t701_ht_pos_vel_torque_kp_kd_control.py --can-port 2 --motor-id 8 --arm right
```

| Argumento | Valores | Finalidade |
| --- | --- | --- |
| `--can-port` | 1–7 | Canal CAN lógico na placa de comunicação. A fiação padrão usa 1 para o braço esquerdo e 2 para o direito. |
| `--motor-id` | 1–8 | Seleciona apenas um motor com esse ID no canal especificado. |
| `--arm` | `left` / `right` | Seleciona os tipos de motor e a configuração de homing desse lado. |

Todos os três argumentos são obrigatórios; não há seleção padrão de braço ou motor. `--arm` não seleciona o canal CAN nem espelha a trajetória do braço direito. O exemplo gera uma configuração temporária de motor único a partir do YAML correspondente, portanto você não precisa editar a lista de motores de todo o braço.

</section>

<section className="section-card">

## Parâmetros MIT e trajetória alvo

Este trecho vem do loop de movimento; o exemplo cria `motor` e `robot`. Defina o comando do motor selecionado e, em seguida, envie-o.

```python
motor.pos_vel_tqe_kp_kd(pos, vel, 0.0, 2, 0.5)
robot.motor_send_cmd()
```

| Parâmetro (na ordem da chamada) | Significado | Configuração original |
| --- | --- | --- |
| `pos` | Posição alvo, rad | `π × sin(2π × 0.1 × t)`, com amplitude de π rad. |
| `vel` | Velocidade alvo, rad/s | `0.2 × π² × cos(2π × 0.1 × t)`, a derivada temporal da posição alvo. |
| `tqe` | Torque de feedforward, Nm | `0.0`. Feedforward zero não significa torque de saída do motor zero. |
| `kp` | Ganho de posição | `2`. |
| `kd` | Ganho de velocidade | `0.5`. |

A frequência original é **0.1 Hz**, o período é de **10 segundos**, e a velocidade alvo de pico é de cerca de **1.974 rad/s**. Se você alterar a posição para `offset + A × sin(2π × f × t)`, use a velocidade correspondente `A × 2π × f × cos(2π × f × t)` e verifique se toda a faixa de `offset − A` a `offset + A` é permitida.

`t` usa `time.time()`, portanto a fase inicial depende do momento de início; o alvo não começa necessariamente em zero. O comentário no código-fonte diz “1.0 rad amplitude”, mas a fórmula usa **π rad**.

O loop dorme por `0.001` segundos após cada envio. Comunicação, computação e impressão aumentam o tempo de ciclo, portanto este não é um loop em tempo real fixo de 1 kHz.

</section>

<section className="section-card">

## Ler o feedback de estado

Na inicialização, o terminal exibe o número de motores controlados. Em seguida, ele imprime o estado do motor selecionado a cada 100 iterações do loop.

| Campo | Significado |
| --- | --- |
| `position` | Posição atual do motor, impressa em rad e convertida para graus. |
| `velocity` | Velocidade atual do motor, rad/s. |
| `torque` | Torque reportado do motor, Nm. |
| `mode` | Valor de modo retornado pelo SDK de baixo nível. |
| `fault` | Código de falha retornado pelo SDK de baixo nível, impresso em hexadecimal. |

O exemplo lê esses campos por meio de `motor.get_current_motor_state()`. O intervalo de impressão depende do tempo real do loop. O exemplo exibe os valores de modo e falha sem decodificar os códigos de falha.

</section>

<section className="section-card">

## Retornar ao zero e sair

1. O primeiro `Ctrl+C` encerra o rastreamento senoidal e inicia um retorno suave do motor selecionado à sua posição zero salva.
2. O homing usa a interface de posição, velocidade e torque máximo `pos_vel_MAXtqe()`, com a configuração de homing para o lado selecionado por `--arm`.
3. Após o homing, a lógica de desligamento envia comandos de freio por amortecimento. Pressione `Ctrl+C` novamente durante o homing para interromper o retorno e tentar a frenagem. Feedback inválido ou uma falha de homing também fazem com que a lógica de desligamento tente a frenagem.

O primeiro `Ctrl+C` aciona o movimento de retorno. A frenagem por amortecimento não é uma manutenção de posição; dê suporte ao mecanismo durante a inicialização e o desligamento.

</section>

<section className="section-card">

## Usar controle MIT para todo o braço

O exemplo de motor único usa um objeto `motor` de baixo nível. O controle de todo o braço usa `Lib.t701_ht.T701HT`, com interfaces separadas para as juntas e para o gripper.

| Interface | Parâmetros e comportamento de envio |
| --- | --- |
| `motor.pos_vel_tqe_kp_kd(pos, vel, tqe, kp, kd)` | Cinco parâmetros escalares para um motor. Chame `robot.motor_send_cmd()` depois para enviar. |
| `arm.pos_vel_tqe_kp_kd(pos, vel, tqe, kp, kd)` | Cinco vetores de juntas de comprimento 7, excluindo o gripper. Verifica a faixa de posição alvo de junta configurada antes de enviar; retorna `False` para um alvo fora da faixa. |
| `arm.gripper_control_MIT(pos, vel, tqe, kp, kd, send=True)` | Cinco parâmetros escalares do gripper. Verifica a faixa de posição alvo do gripper e envia por padrão. Com `send=False`, apenas coloca o comando em fila para envio com o comando das juntas no mesmo ciclo. Retorna `False` para um alvo fora da faixa. |

As verificações de posição alvo da interface MIT de todo o braço não substituem o projeto de trajetória ou a limitação de torque. Para feedforward de gravidade ou tratamento automático de desligamento, use os exemplos completos vinculados na [página do Pinocchio](https://wiki.seeedstudio.com/pt-br/rebot_t701_ht_pinocchio/).

</section>

</div>
