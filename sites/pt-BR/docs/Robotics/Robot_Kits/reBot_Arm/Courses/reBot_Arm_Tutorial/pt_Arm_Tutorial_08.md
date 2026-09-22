---
description: "Capítulo 8 do Curso para Iniciantes em Inteligência Incorporada da Seeed — controle o reBot Arm com o SDK Python: parâmetros, conexão com gerenciador de contexto, movimento, ponto zero e estado das juntas."
title: Capítulo 8 - Controlando o reBot Arm Usando o SDK Python
keywords:
  - reBot
  - Robotic Arm
  - Python SDK
  - reBotArm
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_8
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: LiuJunjie
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/pt-br/rebot_embodied_ai_course_chapter_8/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 2 · Capítulo 8 · Teoria &amp; Prática</span>
    <h2>8. Controlando o reBot Arm Usando o SDK Python</h2>
    <p>
      Capítulo 8 do Curso para Iniciantes em Inteligência Incorporada da Seeed — controle o reBot Arm com
      o SDK Python: parâmetros, conexão com gerenciador de contexto, movimento, ponto zero e estado das juntas.
    </p>
    <div className="hero-actions">
      <a href="#parameters">Parâmetros</a>
      <a href="#connect">Conectar</a>
      <a href="#motion">Movimento</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Neste capítulo</strong>
    <span>8.1 Modificar Parâmetros e Alternar Modos</span>
    <span>8.2 Conectar/Desconectar o Braço Robótico (Usando Gerenciador de Contexto)</span>
    <span>8.3 Controlar o Movimento do Braço Robótico</span>
    <span>8.4 Definir Ponto Zero para o Braço Robótico</span>
    <span>8.5 Atualizar o Estado das Juntas do Braço Robótico</span>
  </div>
</section>

<RebotCourseNav />

<section className="section-card">
  <p>1. Se o ambiente não estiver instalado, consulte a seção 7.2 para o ambiente de instalação.</p>

  <p>2. Os parâmetros de cada controlador de junta do braço robótico do SDK Python precisam ser ajustados de acordo com os requisitos reais de uso. Os parâmetros atuais só podem satisfazer cenários com baixa exigência de precisão.</p>

Instale as dependências necessárias:

```bash
python3 -m pip install pyyaml motorbridge
```

[LINE_66>Puxe o código de exemplo:

```bash
git clone https://github.com/hopcan/rebotArm_ctrl.git
```

- Os exemplos em Python para controlar o reBot DM estão em `rebotArm_ctrl/example/rebotDM`.
- O arquivo de configuração para o braço robótico reBot DM está em `rebotArm_ctrl/config`.
- Os exemplos em Python para controlar o reBot RS estão em `rebotArm_ctrl/example/rebotRS`.
- O arquivo de configuração para o braço robótico reBot RS está em `rebotArm_ctrl/config`.

</section>

## 8.1 Modificar Parâmetros e Alternar Modos

<section id="parameters" className="section-card">
  <div className="section-title">
    <span>Parâmetros</span>
    <h2>8.1 Modificar Parâmetros e Alternar Modos</h2>
  </div>

O modo de controle recomendado para o reBot DM é `POS_VEL`. Alternar o modo de controle das juntas do braço robótico e configurar parâmetros pode ser feito modificando os parâmetros correspondentes em `rebotDM.yaml` em `rebotArm_ctrl/config`.

Por exemplo:

```yaml
- name: Shoulder Pan
  motor_can_id: 1
  MIT:
    kp: 10.0
    kd: 1.0
  POS_VEL:
    vel_kp: 0.0125
    vel_ki: 0.004
    pos_kp: 150.0
    pos_ki: 0.5
    vlim: 5.0
  posmax: 2.6
  posmin: -2.6
  use_mode: POS_VEL
```

Os `kp` e `kd` do MIT, e os `vel_kp`, `vel_ki`, `pos_kp`, `pos_ki` e `vlim` do POS_VEL são os parâmetros do modo correspondente, que podem ser alterados de acordo com o efeito de controle do braço robótico. `use_mode` pode alternar o modo de controle da junta correspondente e pode ser alterado para `MIT` ou `POS_VEL`.

</section>

## 8.2 Conectar/Desconectar o Braço Robótico (Usando Gerenciador de Contexto)

<section id="connect" className="section-card">
  <div className="section-title">
    <span>Conexão</span>
    <h2>8.2 Conectar/Desconectar o Braço Robótico (Usando Gerenciador de Contexto)</h2>
  </div>

Consulte `example/rebotDM/1_rebotDM_connect.py` ou `example/rebotRS/1_rebotRS_connect.py`.

1. Primeiro crie o controlador de barramento.

:::warning Notas
1. Verifique se a porta existe.
2. As permissões da porta devem ser concedidas antes da execução do programa.
:::

O reBot DM usa uma porta serial, criada da seguinte forma:

```python
channel = "/dev/ttyACM0"
ctrl = Controller.from_dm_serial(channel, 921600)
```

O reBot RS usa PCAN:

```python
channel = "can0"
ctrl = Controller(channel)
```

2. Implementado por meio de um gerenciador de contexto seguro:

```python
with reBotArm_handle(ctrl, "rebotDM") as handle:

with reBotArm_handle(ctrl, "rebotRS") as handle:
```

Onde `reBotArm_handle` também oferece suporte ao parâmetro `config_path`. Esse parâmetro pode especificar o arquivo de configuração importado, e o arquivo de configuração padrão do braço robótico não será mais importado. Você pode consultar os arquivos de configuração em `config` para escrever seu próprio arquivo de configuração.

```python
with reBotArm_handle(ctrl, "rebotDM", config_path="absolute path of yaml") as handle:

with reBotArm_handle(ctrl, "rebotRS", config_path="absolute path of yaml") as handle:
```

Implementação principal:

1. A função `__enter__` chamará a função `connect` para se conectar automaticamente ao braço robótico. Se a conexão falhar, o log correspondente será exibido.
2. A função `__exit__` chamará a função `disconnect` para desconectar automaticamente do braço robótico quando o programa for encerrado.
3. Conectar ao braço robótico adicionará motores ao controlador de barramento, verificará a comunicação do motor na energização, verificará se o ID CAN do motor e o ID mestre são válidos, verificará se o arquivo de configuração é válido e alterará o modo de controle do motor para o modo de controle de destino.
4. Desconectar do braço robótico primeiro restaurará automaticamente o estado inicial e, em seguida, desabilitará.

:::warning
Após usar Ctrl+C para sair do programa, aguarde alguns segundos. Não continue pressionando Ctrl+C; é necessário aguardar o braço robótico retornar automaticamente à sua posição inicial e então ser desabilitado.
:::

Se você não quiser usar o gerenciador de contexto, pode chamar diretamente a função `connect` e a função `disconnect` para conectar/desconectar o braço robótico.

</section>

## 8.3 Controlar o Movimento do Braço Robótico

<section id="motion" className="section-card">
  <div className="section-title">
    <span>Movimento</span>
    <h2>8.3 Controlar o Movimento do Braço Robótico</h2>
  </div>

Consulte `example/rebotDM/3_rebotDM_move_joint.py` ou `example/rebotRS/3_rebotRS_move_joint.py`.

```python
while True:
    handle.move_to_joint_positions([0, 0, 0, 0.5, 0.5, 0, -1])
    for motor_id in list(range(1, 8)):
        print(f"motor {motor_id}")
        print(f"pos: {handle.motor_state[motor_id].pos:.3f} rad")
        print(f"vel: {handle.motor_state[motor_id].vel:.3f} rad/s")
        print(f"torque: {handle.motor_state[motor_id].torq:.3f} Nm\n")
    time.sleep(0.002)
```

`handle.motor_state` é um dicionário que contém as informações de estado de todas as juntas. O método de leitura é como acima.

</section>

## 8.4 Definir Ponto Zero para o Braço Robótico

<section id="zero-point" className="section-card">
  <div className="section-title">
    <span>Ponto Zero</span>
    <h2>8.4 Definir Ponto Zero para o Braço Robótico</h2>
  </div>

Consulte `example/rebotDM/2_rebotDM_set_zero.py` ou `example/rebotRS/2_rebotRS_set_zero.py`.

```python
with reBotArm_handle(ctrl, "rebotRS") as handle:
    handle.set_zero_position()

with reBotArm_handle(ctrl, "rebotDM") as handle:
    handle.set_zero_position()
```

Chamar a função `set_zero_position` por meio da classe de controle do braço robótico pode definir o ID de junta correspondente para todas as juntas do braço robótico.

</section>

## 8.5 Atualizar o Estado das Juntas do Braço Robótico

<section id="joint-state" className="section-card">
  <div className="section-title">
    <span>Estado das Juntas</span>
    <h2>8.5 Atualizar o Estado das Juntas do Braço Robótico</h2>
  </div>

Consulte `example/rebotDM/5_rebotDM_request_joints_data.py` ou `example/rebotRS/5_rebotRS_request_joints_data.py`.

```python
with reBotArm_handle(ctrl, "rebotDM") as handle:
    if handle.is_connected:
        print("Controller is connected and ready.")
        print("Motor Use Modes:", handle.use_mode)
    else:
        print("Controller failed to connect.")
    handle.ctrl.disable_all()
    while True:
        print(handle.get_joints_state())
        time.sleep(0.002)


with reBotArm_handle(ctrl, "rebotRS") as handle:
    if handle.is_connected:
        print("Controller is connected and ready.")
        print("Motor Use Modes:", handle.use_mode)
    else:
        print("Controller failed to connect.")
    handle.ctrl.disable_all()
    while True:
        print(handle.get_joints_state())
        time.sleep(0.002)
```

`get_joints_state()`: Atualiza ativamente o estado de cada junta do braço robótico e retorna os ângulos atuais das juntas.

</section>

</div>
